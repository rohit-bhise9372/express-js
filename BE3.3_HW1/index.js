const express = require("express");
const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
];

const todos = [
  {
    id: 1,
    title: "Water the plants",
    day: "Saturday",
  },
  {
    id: 2,
    title: "Go for a walk",
    day: "Sunday",
  },
];

// 1. GET /
app.get("/", (req, res) => {
  res.send("Hello, From Express Server.");
});

// 2. DELETE book with id 1
app.delete("/books/delete", (req, res) => {
  const index = books.findIndex((book) => book.id === 1);

  if (index === -1) {
    return res.status(404).json({
      error: "Book not found",
    });
  }

  books.splice(index, 1);

  res.status(200).json({
    message: "Book deleted successfully",
  });
});

// 3. GET /books
app.get("/books", (req, res) => {
  res.json(books);
});

// 4. DELETE todo with id 4
app.delete("/todos/delete", (req, res) => {
  const index = todos.findIndex((todo) => todo.id === 4);

  if (index === -1) {
    return res.status(404).json({
      error: "Todo does not exist",
    });
  }

  todos.splice(index, 1);

  res.status(200).json({
    message: "Todo deleted successfully",
  });
});

// 5. GET /todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});