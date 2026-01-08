import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))


from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_movies():
    response = client.get("/movielist/2")
    assert response.status_code == 200
    assert response.json() == {
  "media_type": "movie",
  "rating": 8.7,
  "id": 2,
  "title": "Interstellar",
  "year": 2014
}


def test_get_movie_not_found():
    response = client.get("/movielist/999")

    assert response.status_code == 404
    assert response.json()["detail"] == "Movie not found"


def test_movie_response_schema():
    response = client.get("/movielist/2")
    data = response.json()

    expected_keys = {"id", "title", "year", "rating", "media_type"}
    assert expected_keys.issubset(data.keys())


def test_movie_field_types():
    response = client.get("/movielist/2")
    data = response.json()

    assert isinstance(data["id"], int)
    assert isinstance(data["title"], str)
    assert isinstance(data["rating"], float)
    assert isinstance(data["year"], int)

import pytest

@pytest.mark.parametrize("movie_id", [1, 2, 3])
def test_multiple_movies(movie_id):
    response = client.get(f"/movielist/{movie_id}")
    assert response.status_code == 200


