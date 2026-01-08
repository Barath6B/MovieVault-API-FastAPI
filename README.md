## 🎬 MovieVault

**Project OverView**
MovieVault is a full-stack movie management application built as part of a technical assessment.It provides a simple and structured way to store, retrieve, and manage movie information using a modern backend API and a responsive frontend interface.The project focuses on clean architecture, API design, and frontend–backend integration, following real-world development practices.
The application manages a media list (movies / TV shows) with full CRUD functionality and proper validation.

## 🛠 Tech Stack

### Backend
![Python](https://img.shields.io/badge/Python-3.10+-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-teal?logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-red)
![REST API](https://img.shields.io/badge/REST-API-orange)

### Frontend 
![React](https://img.shields.io/badge/React-UI-blue?logo=react)
![HTML](https://img.shields.io/badge/HTML-Frontend-orange?logo=html5)
![CSS](https://img.shields.io/badge/CSS-Frontend-blue?logo=css3)

### Testing & Tools
![Pytest](https://img.shields.io/badge/Pytest-Testing-brightgreen)

### 📌 Problem Understanding
Managing movie data often requires:
 - Structured storage of movie details
 - Efficient retrieval by ID or category
 - Clean and predictable API responses
 - A user-friendly interface for interaction
   
MovieVault solves this by offering:
 - A RESTful backend API to handle movie data
 - A frontend interface to interact with the External API
 - CRUD operations are exposed through REST endpoints
 - Proper separation of concerns between frontend and backend

### ✍️ Design Decisions
Database Schema: 
```
table movielist = {
id: Integer , Primiary_Key = True,
title: String,
media_type: String,
year: Integer,
rating: Float
}
```

📂 Project Structure
```
MovieVault/
│
├── __pycache__/
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│
├── minenv/
├── tests/
│   ├── test_movies.py
│
├── database.py
├── databasemovie.py
├── main.py
├── movie.py
├── schemas.py
├── requirements.txt
└── README.md

```

### Validation Logic

Data integrity is ensured using a combination of schema-level and application-level validation:

- Pydantic models enforce required fields and correct data types
- Logical constraints are applied, such as validating rating ranges and valid release years
- API endpoints verify resource existence before update or delete operations
- Duplicate movie entries are prevented through application-level checks

This approach ensures invalid or inconsistent data never reaches the database.


### Solution Approach
🔄 Data Flow
 - Client sends a request to the FastAPI endpoint.
 - Request data is validated using Pydantic schemas.
 - Business rules and resource existence are checked.
 - External movie API is called when required.
 - Validated data is stored or fetched from PostgreSQL.
 - Response is serialized using Pydantic models.
 - API returns a structured JSON response with proper status codes.

### How to Run the Project

⚠️ Runs locally on localhost (Docker not used)

## 🔧 Setup
Frontend React

Move to frontend folder

```cd frontend```

installation of package

```npm install```

```npm run dev```

frontend url: ``` http://localhost:5173```

Backend Python:

Virtual Environment & Dependencies:
```
python -m venv minenv
source minenv/bin/activate   # Windows: minenv\Scripts\activate
pip install -r requirements.txt
```

API key is free in OMDb webpage

``` https://www.omdbapi.com/apikey.aspx ```

Create a .env file in the project root.

```
EXTERNAL_API_KEY=your_api_key_here
```
⚠️ Disclaimer This requires a OMDb API key (Free Version)

▶️ Run Backend Server
```
uvicorn main:app --reload
```

Backend url : ```http://localhost:8000```

### 📡 API Endpoints

## 1️⃣ Create Movie

- Method: POST
- Endpoint: /movies
- Body: application/json
Request:

```
{
title: "Interstellar"
}
```

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/622c442a-54eb-4e6f-9bd2-0d7387003e42" />


Response:

Movie added at ID 10

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/5752c3a1-26ba-4db9-ab82-e96484fea363" />



2️⃣ Get Movie by ID

 - Method: GET
 - Endpoint: /movies/{id}

3️⃣ Update Movie

 - Method: PUT
 - Endpoint: /movies/{id}
 - Body: application/json

4️⃣ Delete Movie

 - Method: DELETE
 - Endpoint: /movies/{id}

### 🧪 Testing

🧰 Framework:
 - Tests implemented using Pytest and FastAPI TestClient

✅ Endpoint Coverage:
 - Verified successful movie retrieval using valid movie IDs

❌ Negative Scenarios:
 - Tested non-existent movie IDs to ensure proper 404 Not Found responses

📦 Response Validation:
 - Ensured API responses strictly follow the expected response schema

🔢 Data Type Checks:
 - Validated field types (id, title, year, rating, media_type) for data integrity

🔁 Multiple Records:
 - Parameterized tests used to validate multiple movie IDs efficiently

🧪 Unit Tests:
 - Implemented 6 unit test cases covering success paths, error handling, schema validation, and edge cases

To Run Test in root Library
```
pytest
```

📌 Notes
The application runs locally on localhost
The external movie API requires a valid API key.The API key is not included in this repository for security reasons.
Environment variables are used for sensitive configurations


### 👤 Author

Barath B
💻











