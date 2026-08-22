# Express Server Book and Todo API

## Project Overview

This project is an Express.js API that manages predefined **books** and **todos** using in-memory arrays.

## Features

* GET route `/` to display a welcome message.
* DELETE route to delete a book with ID 1.
* GET route `/books` to retrieve all books.
* DELETE route to delete a todo with ID 4.
* GET route `/todos` to retrieve all todos.
* POST route `/books/update` to update book with ID 2.
* POST route `/todos/update` to update a todo using data received from Postman.
* Error handling for unavailable books and todos.
* JSON request handling using `express.json()`.

## API Endpoints

| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| GET    | `/`             | Returns welcome message         |
| DELETE | `/books/delete` | Deletes book with ID 1          |
| GET    | `/books`        | Returns all books               |
| DELETE | `/todos/delete` | Deletes todo with ID 4          |
| GET    | `/todos`        | Returns all todos               |
| POST   | `/books/update` | Updates book with ID 2          |
| POST   | `/todos/update` | Updates todo using request body |

## Technologies Used

* Node.js
* Express.js
* Postman

## How to Run

```bash
npm run dev
```

Server runs on:

```text
http://localhost:3000
```

## Postman

The API routes can be tested using Postman with the appropriate HTTP methods and endpoints.

