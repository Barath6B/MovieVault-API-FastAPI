from pydantic import BaseModel
from typing import Optional

class Movie(BaseModel):
    id: int
    title: str
    media_type: str
    year: int
    rating: float



class MovieUpdate(BaseModel):
    title: str
    media_type: Optional[str] = None
    year: Optional[int] = None
    rating: Optional[float] = None
