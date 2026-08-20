# Express.js Books & Todos DELETE API

## 📌 Project Overview

This project is a simple REST API built using **Node.js** and **Express.js**. It demonstrates how to create GET and DELETE routes, remove data from predefined arrays, handle errors, and test APIs using **Postman**.

The project manages two resources:

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

# 🧪 Testing with Postman

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/`             | Check server          |
| DELETE | `/books/delete` | Delete book with ID 1 |
| GET    | `/books`        | View updated books    |
| DELETE | `/todos/delete` | Delete todo with ID 4 |
| GET    | `/todos`        | View all todos        |

---

# 📊 HTTP Status Codes

| Status Code | Meaning            |
| ----------- | ------------------ |
| **200**     | Request successful |
| **404**     | Resource not found |

---

# 📚 What I Learned

* Creating an Express.js server
* Using `express.json()` middleware
* Building GET and DELETE routes
* Finding array elements with `findIndex()`
* Removing items using `splice()`
* Returning custom error messages
* Using appropriate HTTP status codes
* Testing REST APIs with Postman

---

# 🎯 Conclusion

This project helped me understand how to implement **DELETE operations** in Express.js by removing data from arrays, handling missing resources gracefully, and verifying API responses using Postman.

