#🎬 MovieVault

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

**📌 Problem Understanding**
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

**✍️ Design Decisions**
Database Schema: 
```
table *movielist* = {
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






