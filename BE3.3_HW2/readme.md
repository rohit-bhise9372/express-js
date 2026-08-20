# Express.js Movies & Items DELETE API

## 📌 Project Overview

This project is a simple REST API built using **Node.js** and **Express.js**. It demonstrates how to create GET and DELETE routes, remove data from predefined arrays, handle errors, and test APIs using **Postman**.

The project manages two resources:

* 🎬 Movies
* 🍽️ Items

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
# 🧪 Testing with Postman

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/`              | Check Express server   |
| DELETE | `/movies/delete` | Delete movie with ID 5 |
| GET    | `/movies`        | View all movies        |
| DELETE | `/items/delete`  | Delete item with ID 2  |
| GET    | `/items`         | View updated items     |

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
* Using HTTP status codes correctly
* Testing REST APIs with Postman

---

# 🎯 Conclusion

This project helped me understand how to implement **DELETE operations** in Express.js, handle missing resources with appropriate error messages, and verify API functionality using Postman.

