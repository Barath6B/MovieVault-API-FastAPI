from sqlalchemy.orm import declarative_base
from sqlalchemy import Column,Integer,Float,String

Base = declarative_base()

class MovieList(Base):

    __tablename__ = "movielist"

    id= Column(Integer, primary_key= True, index=True)
    title= Column(String)
    media_type= Column(String)
    year= Column(Integer)
    rating= Column(Float)
