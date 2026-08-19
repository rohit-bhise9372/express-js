# Express.js Books & Todos API

## 📌 Project Overview

This project is a simple REST API built using **Node.js and Express.js**.

The API demonstrates how to:

* Create an Express server
* Handle GET requests
* Handle POST requests
* Receive JSON data using `req.body`
* Validate request data
* Add data to predefined arrays
* Send JSON responses
* Test APIs using Postman

The project contains two resources:

* 📚 Books
* ✅ Todos

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* JavaScript
* Postman

---

## 📁 Project Structure

```text
project-folder/
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### 1. Initialize the project

```bash
npm init -y
```

### 2. Install Express.js

```bash
npm install express
```

---

## ▶️ Run the Server

Start the server using:

```bash
node index.js
```

The server will run on:

```text
http://localhost:3000
```

Expected terminal output:

```text
Server running on port 3000
```

---

# 📚 Books API

The project starts with two predefined books:

```js
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
];
```

---

## 1. GET `/`

This route sends a simple message to confirm that the Express server is running.

### Request

```text
GET http://localhost:3000/
```

### Response

```text
Hello Express Server!
```

### Postman

1. Open Postman.
2. Select `GET`.
3. Enter `http://localhost:3000/`.
4. Click **Send**.

---

## 2. POST `/books`

This route is used to add a new book to the `books` array.

### Request

```text
POST http://localhost:3000/books
```

### Request Body

In Postman:

**Body → raw → JSON**

```json
{
  "id": 3,
  "title": "1984",
  "author": "George Orwell",
  "year": 1949
}
```

### Successful Response

Status:

```text
201 Created
```

Response:

```json
{
  "message": "Book added successfully.",
  "book": {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  }
}
```

---

## ❌ Books Validation

The API checks whether these fields are present:

* `id`
* `title`
* `author`
* `year`

If any field is missing, the API returns a `400 Bad Request`.

### Example

```json
{
  "id": 3,
  "title": "1984",
  "author": "George Orwell"
}
```

### Response

```json
{
  "error": "Id, title, author and year are required."
}
```

Status:

```text
400 Bad Request
```

---

## 3. GET `/books`

This route returns all books stored in the `books` array.

### Request

```text
GET http://localhost:3000/books
```

### Response

After adding the new book:

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  }
]
```

---

# ✅ Todos API

The project starts with one predefined todo:

```js
const todos = [
  {
    id: 1,
    title: "Water the plants",
    day: "Saturday",
  },
];
```

---

## 4. POST `/todos`

This route is used to add a new todo to the `todos` array.

### Request

```text
POST http://localhost:3000/todos
```

### Request Body

In Postman:

**Body → raw → JSON**

```json
{
  "id": 2,
  "title": "Go for a walk",
  "day": "Sunday"
}
```

### Successful Response

Status:

```text
201 Created
```

Response:

```json
{
  "message": "Todo added successfully.",
  "todo": {
    "id": 2,
    "title": "Go for a walk",
    "day": "Sunday"
  }
}
```

---

## ❌ Todo Validation

The API checks whether these fields are present:

* `id`
* `title`
* `day`

If any field is missing, the API returns a `400 Bad Request`.

### Example

```json
{
  "id": 2,
  "title": "Go for a walk"
}
```

### Response

```json
{
  "error": "Id, title and day are required."
}
```

Status:

```text
400 Bad Request
```

---

## 5. GET `/todos`

This route returns all todos stored in the `todos` array.

### Request

```text
GET http://localhost:3000/todos
```

### Response

```json
[
  {
    "id": 1,
    "title": "Water the plants",
    "day": "Saturday"
  },
  {
    "id": 2,
    "title": "Go for a walk",
    "day": "Sunday"
  }
]
```

---

# 🧪 Postman Testing

The following API requests were tested using Postman:

| Method | Endpoint | Purpose              |
| ------ | -------- | -------------------- |
| GET    | `/`      | Check Express server |
| POST   | `/books` | Add a new book       |
| GET    | `/books` | Get all books        |
| POST   | `/todos` | Add a new todo       |
| GET    | `/todos` | Get all todos        |

---

# 📊 HTTP Status Codes Used

| Status Code | Meaning     | Used For                        |
| ----------- | ----------- | ------------------------------- |
| `200`       | OK          | Successful GET requests         |
| `201`       | Created     | Successfully adding a book/todo |
| `400`       | Bad Request | Missing required data           |

---

# 🎯 Conclusion

This project helped me understand the fundamentals of creating REST APIs with **Express.js**. I practiced creating GET and POST routes, handling JSON request bodies, validating user input, and testing APIs using **Postman**.

This is a basic foundation for building more advanced backend applications with databases such as MongoDB.

