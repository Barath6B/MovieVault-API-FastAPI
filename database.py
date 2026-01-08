from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

db_url = "postgresql://postgres:barath68@localhost:5432/Movie_List"
engine = create_engine(db_url)

session = sessionmaker(
    autocommit = False,
    autoflush= False,
    bind= engine
)