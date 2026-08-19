
# Express.js Movies & Items API

## 📌 Project Overview

This project is a simple REST API built using **Node.js and Express.js**.

The project demonstrates how to create GET and POST routes, handle JSON request data, validate incoming data, and test APIs using **Postman**.

The API manages two types of data:

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

---


# 🧪 Postman API Testing

The following routes can be tested using Postman:

| Method | Endpoint  | Purpose              |
| ------ | --------- | -------------------- |
| GET    | `/`       | Check Express server |
| POST   | `/movies` | Add a new movie      |
| GET    | `/movies` | Get all movies       |
| POST   | `/items`  | Add a new item       |
| GET    | `/items`  | Get all items        |

---

# 📊 HTTP Status Codes

| Status Code | Meaning     | Usage                            |
| ----------- | ----------- | -------------------------------- |
| `200`       | OK          | Successful GET requests          |
| `201`       | Created     | Successfully adding movies/items |
| `400`       | Bad Request | Missing required data            |

---

# 🎯 Conclusion

This project provided hands-on practice with **Express.js REST APIs** and **Postman**. I learned how to create API endpoints, handle GET and POST requests, validate incoming data, add new objects to arrays, and test different API responses.

This project provides a basic foundation for building more advanced backend applications using Express.js and databases such as MongoDB.
