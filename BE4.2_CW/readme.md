# BE2.4_HW1 - Movie API

## PRD Checklist

### Project Overview
This project is a backend Movie API built using Node.js, Express.js, MongoDB, and Mongoose. The newly implemented feature allows users to add a new movie to the database through a REST API by sending JSON data.

### Features Implemented

- Enabled JSON request body parsing using `app.use(express.json())`.
- Created a reusable `createMovie()` function to save movie data in MongoDB.
- Implemented `POST /movies` endpoint to add a new movie.
- Returns a success response with the saved movie and HTTP status `201`.
- Added error handling for failed movie creation with HTTP status `500`.

### API Endpoint

#### Add a New Movie

**POST** `/movies`

Sample Request Body:

```json
{
  "title": "ZNMD",
  "releaseYear": 1995,
  "genre": "Drama",
  "director": "Some Director",
  "actors": ["Hritik", "Actor2"],
  "language": "Hindi",
  "country": "India",
  "rating": 6.1,
  "plot": "three friends going on a trip.",
  "awards": "IFA Filmfare Awards",
  "posterUrl": "https://example.com/new-poster1.jpg",
  "trailerUrl": "https://example.com/new-trailer1.mp4"
}
```

Success Response:

```json
{
  "title": "ZNMD",
  "releaseYear": 1995,
  "genre": "Drama",
  "director": "Some Director",
  "actors": ["Hritik", "Actor2"],
  "language": "Hindi",
  "country": "India",
  "rating": 6.1,
  "plot": "three friends going on a trip.",
  "awards": "IFA Filmfare Awards",
  "posterUrl": "https://example.com/new-poster1.jpg",
  "trailerUrl": "https://example.com/new-trailer1.mp4"
}
```

### Project Structure

```text
BE2.4_HW1/
│── db/
│   └── db.connect.js
│── models/
│   └── movie.models.js
│── movies.json
│── index.js
│── package.json
└── package-lock.json
```

### Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

