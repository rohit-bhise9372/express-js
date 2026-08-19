# Express.js Books & Todos API

## 📌 Project Overview

This project is a simple REST API built using **Node.js and Express.js**.

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

