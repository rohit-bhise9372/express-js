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


// DELETE book with id 1
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

// GET /books
app.get("/books", (req, res) => {
  res.json(books);
});

// DELETE todo with id 4
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

// GET /todos
app.get("/todos", (req, res) => {
  res.json(todos);
});


// 2. POST route to update book with id 2
app.post("/books/update", (req, res) => {
  const book = books.find((book) => book.id === 2);

  if (!book) {
    return res.status(404).json({
      error: "Book not found",
    });
  }

  Object.assign(book, {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1970,
  });

  res.status(200).json({
    message: "Book updated successfully",
    book,
  });
});

// 4. POST route to update todo with id 1
app.post("/todos/update", (req, res) => {
  const updatedTodo = req.body;

  const todo = todos.find((todo) => todo.id === updatedTodo.id);

  if (!todo) {
    return res.status(404).json({
      error: "Todo does not exist",
    });
  }

  Object.assign(todo, updatedTodo);

  res.status(200).json({
    message: "Todo updated successfully",
    todo,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});