# BI1.1_CW – Backend Integration (React + Express)

## Project Overview

This project demonstrates **Backend Integration** by connecting a **React (Vite)** frontend with an **Express.js** backend. The frontend fetches movie data from REST APIs using a reusable custom `useFetch` hook and displays movie information dynamically.

## Features Implemented

### Frontend (React)

* Display all movie titles
* Fetch movie details by title
* Reusable custom `useFetch` hook
* Loading and error handling
* React Functional Components

### Backend (Express + MongoDB)

* Create a new movie
* Get all movies
* Get movie by title
* Get movies by director
* Get movies by genre
* Update movie by ID
* Delete movie by ID
* MongoDB Atlas integration with Mongoose

## Tech Stack

* React (Vite)
* JavaScript
* Express.js
* MongoDB Atlas
* Mongoose
* CSS

## Project Structure

```text
BI1.1_CW/
backend/
├── api/
│   └── index.js
├── db/
│   └── db.connect.js
├── models/
│   └── movie.models.js
├── movies.json
├── package.json
├── package-lock.json
└── vercel.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Movies.jsx
│   │   │   └── MovieByTitle.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── useFetch.jsx
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

## API Endpoints

| Method | Endpoint                         | Description            |
| ------ | -------------------------------- | ---------------------- |
| GET    | `/movies`                        | Get all movies         |
| GET    | `/movies/:title`                 | Get movie by title     |
| GET    | `/movies/director/:directorName` | Get movies by director |
| GET    | `/movies/genres/:genreName`      | Get movies by genre    |
| POST   | `/movies`                        | Add a new movie        |
| POST   | `/movies/:movieId`               | Update a movie         |
| DELETE | `/movies/:movieId`               | Delete a movie         |

## Installation

### Backend

```bash
cd backend
npm install
node index.js
```

Runs on **http://localhost:3000**

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on **http://localhost:5173**

> Make sure the backend server is running before starting the frontend.

## Author

**Rohit Bhise**

