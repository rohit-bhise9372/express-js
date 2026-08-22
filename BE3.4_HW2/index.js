const express = require("express");
const app = express();

app.use(express.json());

const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
];

const items = [
  {
    id: 1,
    itemName: "Spoon",
    color: "Silver",
    quantity: 8,
  },
  {
    id: 2,
    itemName: "Fork",
    color: "Silver",
    quantity: 8,
  },
  {
    id: 3,
    itemName: "Plate",
    color: "Off-White",
    quantity: 6,
  },
];

// 1. GET /
app.get("/", (req, res) => {
  res.send("Hello, Express server.");
});

// 2. DELETE movie with id 5
app.delete("/movies/delete", (req, res) => {
  const index = movies.findIndex((movie) => movie.id === 5);

  if (index === -1) {
    return res.status(404).json({
      error: "Movie not found.",
    });
  }

  movies.splice(index, 1);

  res.status(200).json({
    message: "Movie deleted successfully.",
  });
});

// 3. GET /movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// 4. DELETE item with id 2
app.delete("/items/delete", (req, res) => {
  const index = items.findIndex((item) => item.id === 2);

  if (index === -1) {
    return res.status(404).json({
      error: "Item not found.",
    });
  }

  items.splice(index, 1);

  res.status(200).json({
    message: "Item deleted successfully.",
  });
});

// 5. GET /items
app.get("/items", (req, res) => {
  res.json(items);
});


// POST route to update movie
app.post("/movies/update", (req, res) => {
  const updatedMovie = req.body;

  const movie = movies.find((movie) => movie.id === updatedMovie.id);

  if (!movie) {
    return res.status(404).json({
      error: "Movie not found",
    });
  }

  Object.assign(movie, updatedMovie);

  res.status(200).json({
    message: "Movie updated successfully",
    movie,
  });
});

// POST route to update item
app.post("/items/update", (req, res) => {
  const updatedItem = req.body;

  const item = items.find((item) => item.id === updatedItem.id);

  if (!item) {
    return res.status(404).json({
      error: "Item not found",
    });
  }

  Object.assign(item, updatedItem);

  res.status(200).json({
    message: "Item updated successfully",
    item,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

