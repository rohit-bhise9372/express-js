# 🎬 Movie Database Backend API

A RESTful backend application built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** to manage a movie database. It supports creating, reading, and deleting movie records through API endpoints.

## 🚀 Project Overview

This project is a backend API that stores and manages movie information in MongoDB. Users can add new movies, retrieve movies by different filters, view all movies, and delete movies by ID.

## ✨ Features Implemented

- Create a new movie record
- Get all movies from the database
- Get a movie by its title
- Get movies by director name
- Get movies by genre
- Delete a movie by its MongoDB ID
- MongoDB Atlas connection using Mongoose
- JSON request handling with Express

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## 📁 Project Structure

```text
movie-database-backend/
│
├── db/
│   └── db.connect.js          
│
├── models/
│   └── movie.models.js        
│
├── movies.json               
├── index.js                  
├── package.json
├── package-lock.json
└── README.md
```

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/movies` | Add a new movie |
| GET | `/movies` | Get all movies |
| GET | `/movies/:title` | Get movie by title |
| GET | `/movies/director/:directorName` | Get movies by director |
| GET | `/movies/genres/:genreName` | Get movies by genre |
| DELETE | `/movies/:movieId` | Delete movie by ID |

