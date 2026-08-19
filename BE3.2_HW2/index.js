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
];

// 1. GET /
app.get("/", (req, res) => {
  res.send("Express server.");
});

// 2. POST /movies
app.post("/movies", (req, res) => {
  const newMovie = req.body;

  if (
    !newMovie.id ||
    !newMovie.title ||
    !newMovie.director ||
    !newMovie.year
  ) {
    return res.status(400).json({
      error: "Id, title, director and year are required.",
    });
  }

  movies.push(newMovie);

  res.status(201).json({
    message: "Movie added successfully.",
    movie: newMovie,
  });
});

// 3. GET /movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// 4. POST /items
app.post("/items", (req, res) => {
  const newItem = req.body;

  if (
    !newItem.id ||
    !newItem.itemName ||
    !newItem.color ||
    !newItem.quantity
  ) {
    return res.status(400).json({
      error: "Id, itemName, color and quantity are required.",
    });
  }

  items.push(newItem);

  res.status(201).json({
    message: "Item added successfully.",
    item: newItem,
  });
});

// 5. GET /items
app.get("/items", (req, res) => {
  res.json(items);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});