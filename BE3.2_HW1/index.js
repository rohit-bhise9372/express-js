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

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const todos = [
  {
    id: 1,
    title: "Water the plants",
    day: "Saturday",
  },
];


// 1. GET /
app.get("/", (requestAnimationFrame, res) => {
  res.send("Hello Express Server!");
});


// 2. POST /books
app.post("/books", (req, res) => {
  const newBook = req.body;

  if (!newBook.id || !newBook.title || !newBook.author || !newBook.year) {
    return res.status(400).json({
      error: "Id, title, author and year are required.",
    });
  }

  books.push(newBook);

  res.status(201).json({
    message: "Book added successfully.",
    book: newBook,
  });
});


// 3. GET /books
app.get("/books", (req, res) => {
  res.json(books);
});


// 4. POST /todos
app.post("/todos", (req, res) => {
  const newTodo = req.body;

  if (!newTodo.id || !newTodo.title || !newTodo.day) {
    return res.status(400).json({
      error: "Id, title and day are required.",
    });
  }

  todos.push(newTodo);

  res.status(201).json({
    message: "Todo added successfully.",
    todo: newTodo,
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
