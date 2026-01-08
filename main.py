from fastapi import Depends,FastAPI , status , HTTPException
from fastapi.middleware.cors import CORSMiddleware
from movie import Movie , MovieUpdate
from schemas import MovieRequest
from dotenv import load_dotenv
from database import session,engine
from sqlalchemy.orm import Session
import databasemovie
import httpx
import os

load_dotenv()
api_key = os.getenv("OMDb_API")

app= FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"]
)



databasemovie.Base.metadata.create_all(bind=engine)

def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()

async def get_movie_data(title: str , api_key: str):
    url= "http://www.omdbapi.com/"

    params = {
        "t": title,
        "apikey": api_key
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url,params=params)
        data = response.json()
    if data.get("Response") == "False":
        return None
    
    return data



@app.get("/movielist")
def get_all_movies(db: Session=Depends(get_db)):
    return db.query(databasemovie.MovieList).all()


@app.get("/movielist/{id}")
def get_movie_by_id(id: int , db: Session = Depends(get_db)):
    movie = db.query(databasemovie.MovieList).filter(databasemovie.MovieList.id == id).first()
    if movie:
        return movie
    raise HTTPException(status_code=404 , detail="Movie not found")


        
@app.post("/movielist" , status_code=201)
async def add_movie_to_list(movie: MovieRequest , db: Session = Depends(get_db)):

    data = await get_movie_data(movie.title , api_key)

    if not data:
        raise HTTPException(status_code=404 , detail="Movie not found in OMdb")
    
    db_movie = databasemovie.MovieList(
        title = data["Title"],
        media_type = data["Type"],
        year = int(data["Year"][:4]),
        rating = float(data["imdbRating"])
    )

    db.add(db_movie)
    db.commit()
    db.refresh(db_movie)
    return db_movie



@app.put("/movielist/{id}")
def update_movie_list(id: int , movie: MovieUpdate , db: Session = Depends(get_db)):
    db_movie = db.query(databasemovie.MovieList).filter(databasemovie.MovieList.id == id).first()
    if db_movie:
        db_movie.title = movie.title
        db_movie.media_type = movie.media_type
        db_movie.year = movie.year
        db_movie.rating = movie.rating

        db.commit()
        db.refresh(db_movie)
        return "Product Updated"
    return "Product Not Found"


        
# Delete Response
@app.delete("/movielist/{id}",status_code=204)
def delete_movie_from_list(id: int , db: Session = Depends(get_db)):
    db_movie = db.query(databasemovie.MovieList).filter(databasemovie.MovieList.id == id).first()
    if db_movie:
        db.delete(db_movie)
        db.commit()
        return "Movie Deleted SuccessFullY!"

