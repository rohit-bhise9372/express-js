const express = require("express");
const cors = require("cors");

const { initializeDatabase } = require("../db/db.connect");
const Movie = require("../models/movie.models");

const app = express();

initializeDatabase();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Movie API is running 🚀" });
});

// Create Movie
app.post("/movies", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();

    res.status(201).json({
      message: "Movie added successfully.",
      movie: savedMovie,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
});

// Get All Movies
app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();

    if (movies.length) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

// Get Movie By Title
app.get("/movies/:title", async (req, res) => {
  try {
    const movie = await Movie.findOne({ title: req.params.title });

    if (movie) res.json(movie);
    else res.status(404).json({ error: "Movie not found." });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie." });
  }
});

// Get By Director
app.get("/movies/director/:directorName", async (req, res) => {
  try {
    const movies = await Movie.find({
      director: req.params.directorName,
    });

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

// Get By Genre
app.get("/movies/genres/:genreName", async (req, res) => {
  try {
    const movies = await Movie.find({
      genre: req.params.genreName,
    });

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

// Delete Movie
app.delete("/movies/:movieId", async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId);

    if (deletedMovie) {
      res.json({ message: "Movie deleted successfully." });
    } else {
      res.status(404).json({ error: "Movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete movie." });
  }
});

// Update Movie
app.post("/movies/:movieId", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.movieId,
      req.body,
      { new: true }
    );

    if (updatedMovie) {
      res.json({
        message: "Movie updated successfully.",
        movie: updatedMovie,
      });
    } else {
      res.status(404).json({ error: "Movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update movie." });
  }
});

module.exports = app;
