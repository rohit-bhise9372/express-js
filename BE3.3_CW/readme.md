
# Express.js Car Management REST API

## 📌 Project Overview

This project is a simple REST API built using **Node.js** and **Express.js**. It demonstrates how to create, read, add, and delete car records using in-memory data structures. The API is tested using **Postman**.

### Features

* Create an Express server
* Get all cars
* Add a new car
* Delete a car by ID
* Validate request body data
* Test endpoints with Postman

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

| Method | Endpoint    | Description        |
| ------ | ----------- | ------------------ |
| GET    | `/`         | Check server       |
| GET    | `/cars`     | Get all cars       |
| POST   | `/cars`     | Add a new car      |
| DELETE | `/cars/:id` | Delete a car by ID |

---

# 📊 HTTP Status Codes

| Status | Meaning                    |
| ------ | -------------------------- |
| 200    | Request successful         |
| 201    | Resource created           |
| 400    | Bad request (missing data) |
| 404    | Resource not found         |

---

# 📚 What I Learned

* Creating an Express server
* Using `express.json()` middleware
* Building GET, POST, and DELETE routes
* Reading data from `req.body`
* Reading route parameters using `req.params`
* Finding array elements with `findIndex()`
* Removing items using `splice()`
* Returning appropriate HTTP status codes
* Testing REST APIs with Postman

---

# 🎯 Conclusion

This project helped me understand the fundamentals of REST API development in Express.js by implementing Create, Read, and Delete operations on a collection of car records. It also provided practical experience using Postman for API testing.
