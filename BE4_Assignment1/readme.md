# 📚 Book Management API

A RESTful backend API built with **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose** to manage book records.

## Project Overview

This application allows users to create, read, update, and delete books stored in a MongoDB database. It includes APIs for searching books by title, author, genre, and published year, along with proper error handling.

## Features

* Create a new book
* Get all books
* Get a book by title
* Get books by author
* Get books by Business genre
* Get books published in 2012
* Update a book's rating by ID
* Update book details by title
* Delete a book by ID

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Postman

## Folder Structure

```text
├── db
│   └── db.connect.js
├── model
│   └── book.models.js
├── index.js
├── package.json
└── package-lock.json
```

## Installation

1. Clone the repository

```bash
git clone <your-repository-link>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
MONGODB=your_mongodb_connection_string
```

4. Start the server

```bash
npm run dev
```

Server runs on **http://localhost:3000**

## API Endpoints

| Method | Endpoint                    | Description              |
| ------ | --------------------------- | ------------------------ |
| POST   | `/books`                    | Create a new book        |
| GET    | `/books`                    | Get all books            |
| GET    | `/books/:bookTitle`         | Get book by title        |
| GET    | `/books/author/:authorName` | Get books by author      |
| GET    | `/books/genre/business`     | Get Business books       |
| GET    | `/books/year/:year`         | Get books by year        |
| POST   | `/books/:bookId`            | Update book rating by ID |
| POST   | `/books/title/:bookTitle`   | Update book by title     |
| DELETE | `/books/:bookId`            | Delete book by ID        |

## Author

**Rohit Bhise**

