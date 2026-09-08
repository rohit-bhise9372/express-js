const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("../db/db.connect");
const Movie = require("../models/movie.models");

const app = express();

// MongoDB connection — cached for serverless
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  await initializeDatabase();
  isConnected = true;
}

// CORS
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// ---- ROUTES ----

// GET all movies
app.get("/movies", async (req, res) => {
  try {
    await connectDB();
    const movies = await Movie.find();
    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

// GET movie by director
app.get("/movies/director/:directorName", async (req, res) => {
  try {
    await connectDB();
    const movies = await Movie.find({ director: req.params.directorName });
    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

// GET movie by genre
app.get("/movies/genres/:genreName", async (req, res) => {
  try {
    await connectDB();
    const movies = await Movie.find({ genre: req.params.genreName });
    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

// GET movie by title
app.get("/movies/:title", async (req, res) => {
  try {
    await connectDB();
    const movie = await Movie.findOne({ title: req.params.title });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "Movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie." });
  }
});

// POST create movie
app.post("/movies", async (req, res) => {
  try {
    await connectDB();
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json({ message: "Movie added successfully.", movie: savedMovie });
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie." });
  }
});

// POST update movie
app.post("/movies/:movieId", async (req, res) => {
  try {
    await connectDB();
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.movieId,
      req.body,
      { new: true }
    );
    if (updatedMovie) {
      res.status(200).json({ message: "Movie updated successfully.", movie: updatedMovie });
    } else {
      res.status(404).json({ error: "Movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update movie." });
  }
});

// DELETE movie
app.delete("/movies/:movieId", async (req, res) => {
  try {
    await connectDB();
    const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId);
    if (deletedMovie) {
      res.status(200).json({ message: "Movie deleted successfully." });
    } else {
      res.status(404).json({ error: "Movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete movie." });
  }
});

// ✅ NO app.listen() — Vercel handles this
module.exports = app;
