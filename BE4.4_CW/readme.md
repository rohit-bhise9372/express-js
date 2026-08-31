# Movie Update API

A RESTful backend API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** that updates movie details in the database using a movie ID.

## Project Overview

This project provides an API to update existing movie records stored in MongoDB. Users can update one or more fields (such as `releaseYear`, `title`, `director`, etc.) by sending a POST request with the movie's MongoDB ID.

## Features Implemented

- Update a movie by its MongoDB ID
- Uses Mongoose `findByIdAndUpdate()`
- Returns the updated movie document
- Handles 404 error if movie is not found
- Handles 500 server errors with proper responses
- JSON request body support using Express

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Folder Structure

```text
├── db
│   └── db.connect.js
├── models
│   └── movie.models.js
├── index.js
├── movies.json
├── package.json
└── package-lock.json
```

## API Endpoint

### Update Movie

**POST** `/movies/:movieId`

Updates an existing movie by its MongoDB ID.

### Example Request

```http
POST /movies/68afdb77995bcad89c29834c
```

### Request Body

```json
{
  "releaseYear": 2002
}
```

### Success Response

```json
{
  "message": "Movie updated successfully.",
  "movie": {
    "_id": "68afdb77995bcad89c29834c",
    "title": "The Dark Knight",
    "releaseYear": 2002
  }
}
```

### Error Responses

**404 – Movie Not Found**

```json
{
  "error": "Movie not found."
}
```

**500 – Internal Server Error**

```json
{
  "error": "Failed to update movie."
}
```

## Testing

Use **Postman** to test the endpoint:

- **Method:** `POST`
- **URL:** `http://localhost:3000/movies/:movieId`
- **Body:** Raw → JSON

## Author

**Rohit Bhise**
