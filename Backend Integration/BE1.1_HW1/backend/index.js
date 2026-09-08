const express = require("express");
const app = express();

const { initializeDatabase } = require("./db/db.connect");
const Book = require("./model/book.models");

// Connect Database
initializeDatabase();

// Middleware
app.use(express.json());

// Add new books
async function createBook(newBook) {
  try {
    const book = new Book(newBook);
    const savedBook = await book.save();
    return savedBook;
  } catch (error) {
    throw error;
  }
}

app.post("/books", async (req, res) => {
  try {
    const savedBook = await createBook(req.body);

    res.status(201).json({
      message: "Book added successfully.",
      book: savedBook,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add book.",
    });
  }
});


// Read all books 
async function readAllBooks() { 
  try { 
    const books = await Book.find(); 
    return books; 
  } catch (error) { 
    throw error; 
  } 
} 
 
app.get("/books", async (req, res) => { 
  try { 
    const books = await readAllBooks(); 
 
    if (books.length !== 0) { 
      res.json(books); 
    } else { 
      res.status(404).json({ 
        error: "No books found.", 
      }); 
    } 
  } catch (error) { 
    res.status(500).json({ 
      error: "Failed to fetch books.", 
    }); 
  } 
}); 



//GET BOOK BY TITLE

async function readBookByTitle(bookTitle) {
  try {
    const book = await Book.findOne({ title: bookTitle });
    return book;
  } catch (error) {
    throw error;
  }
}

app.get("/books/:bookTitle", async (req, res) => {
  try {
    const book = await readBookByTitle(req.params.bookTitle);

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({
        error: "Book not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch book.",
    });
  }
});


//5. Get all books by author

async function readBooksByAuthor(authorName) {
  try {
    const books = await Book.find({ author: authorName });
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books/author/:authorName", async (req, res) => {
  try {
    const books = await readBooksByAuthor(req.params.authorName);

    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({
        error: "No books found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch books.",
    });
  }
});


//6. Get all Business genre books
async function readBusinessBooks() {
  try {
    const books = await Book.find({ genre: "Business" });
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books/genre/business", async (req, res) => {
  try {
    const books = await readBusinessBooks();

    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({
        error: "No books found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch books.",
    });
  }
});

//7. Get books released in 2012
async function readBooksByYear(year) {
  try {
    const books = await Book.find({ publishedYear: year });
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books/year/:year", async (req, res) => {
  try {
    const books = await readBooksByYear(Number(req.params.year));

    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({
        error: "No books found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch books.",
    });
  }
});


//8. Update book rating by ID
async function updateBookById(bookId, dataToUpdate) {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      dataToUpdate,
      { new: true }
    );
    return updatedBook;
  } catch (error) {
    throw error;
  }
}

app.post("/books/:bookId", async (req, res) => {
  try {
    const updatedBook = await updateBookById(
      req.params.bookId,
      req.body
    );

    if (updatedBook) {
      res.status(200).json({
        message: "Book updated successfully.",
        book: updatedBook,
      });
    } else {
      res.status(404).json({
        error: "Book does not exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to update book.",
    });
  }
});


//9. Update book by title (findOneAndUpdate)
async function updateBookByTitle(bookTitle, dataToUpdate) {
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { title: bookTitle },
      dataToUpdate,
      { new: true }
    );
    return updatedBook;
  } catch (error) {
    throw error;
  }
}


app.post("/books/title/:bookTitle", async (req, res) => {
  try {
    const updatedBook = await updateBookByTitle(
      req.params.bookTitle,
      req.body
    );

    if (updatedBook) {
      res.status(200).json({
        message: "Book updated successfully.",
        book: updatedBook,
      });
    } else {
      res.status(404).json({
        error: "Book does not exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to update book.",
    });
  }
});


//10. Delete book by ID
async function deleteBookById(bookId) {
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    return deletedBook;
  } catch (error) {
    throw error;
  }
}


app.delete("/books/:bookId", async (req, res) => {
  try {
    const deletedBook = await deleteBookById(req.params.bookId);

    if (deletedBook) {
      res.status(200).json({
        message: "Book deleted successfully.",
      });
    } else {
      res.status(404).json({
        error: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete book.",
    });
  }
});

// Start Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



//


 

 
