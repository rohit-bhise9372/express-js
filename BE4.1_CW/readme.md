# 🎬 Movie Database API

A backend REST API built with **Node.js, Express.js, MongoDB, and Mongoose** to manage and retrieve movie data. This project demonstrates how to connect an Express server with MongoDB Atlas and perform read operations using different API endpoints.

---

## 📌 Project Overview

The Movie Database API allows users to fetch movie information stored in a MongoDB database. It provides endpoints to retrieve all movies, search by title, filter by director, and filter by genre using REST APIs.

---

## ✨ Features Implemented

- Connected Node.js application with MongoDB Atlas.
- Created a **Movie** Mongoose schema.
- Built an Express server with REST API endpoints.
- Fetch all movies from the database.
- Find a movie by its title.
- Retrieve movies by director name.
- Retrieve movies by genre.
- Used async/await with proper error handling.
- Returned appropriate HTTP status codes (200, 404, 500).

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JavaScript**

---

## 📁 Project Structure

```text
movie-database-api/
│
├── db/
│   └── db.connect.js
│
├── models/
│   ├── movie.models.js
├── movies.json
├── index.js
├── package.json
└── package-lock.json
```
