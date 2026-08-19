# Express.js Cars API

## 📌 Project Overview

This project is a simple **REST API using Express.js**. It demonstrates how to create a basic Express server and perform API operations using **Postman**.

The project currently supports:

* Starting an Express.js server
* Creating a new car using a `POST` request
* Getting all cars using a `GET` request
* Sending and receiving JSON data
* Validating required car fields
* Testing APIs using Postman

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* Postman
* JavaScript

---

## 📁 Project Structure

```text
project-folder/
│
├── index.js
├── package.json
└── package-lock.json
```

---

## 🚀 Installation & Setup

### 1. Initialize the project

```bash
npm init -y
```

### 2. Install Express

```bash
npm install express
```

### 3. Run the server

```bash
node index.js
```

The server will start on:

```text
http://localhost:3000
```

---

# 🔗 API Endpoints

## 1. Home Route

### GET `/`

This route checks whether the Express server is running.

**URL:**

```text
http://localhost:3000/
```

**Response:**

```text
Hello Express!
```

---

## 2. Get All Cars

### GET `/cars`

This endpoint returns all cars currently stored in the `cars` array.

**URL:**

```text
http://localhost:3000/cars
```

**Example Response:**

```json
[
  {
    "id": 1,
    "make": "Toyota",
    "model": "Canry",
    "year": 2022
  }
]
```

---

## 3. Add a New Car

### POST `/cars`

This endpoint is used to add a new car.

**URL:**

```text
http://localhost:3000/cars
```

### Request Method

```text
POST
```

### Headers

```text
Content-Type: application/json
```

### Request Body

In Postman, select:

**Body → raw → JSON**

Then send:

```json
{
  "id": 2,
  "make": "Honda",
  "model": "City",
  "year": 2023
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
  "message": "Car added successfully.",
  "car": {
    "id": 2,
    "make": "Honda",
    "model": "City",
    "year": 2023
  }
}
```

---

# 🧪 Testing with Postman

Postman is used to test the API without creating a frontend.

### Steps to test POST request:

1. Start the server using:

```bash
node index.js
```

2. Open Postman.
3. Create a new request.
4. Select the `POST` method.
5. Enter:

```text
http://localhost:3000/cars
```

6. Go to **Body**.
7. Select **raw**.
8. Select **JSON**.
9. Enter the car data.
10. Click **Send**.
11. Check the response.

After successfully adding a car, use:

```text
GET http://localhost:3000/cars
```

to verify that the new car has been added.

---

# ❌ Validation

The API checks whether the following fields are provided:

* `make`
* `model`
* `year`

If any required field is missing, the API returns:

**Status:**

```text
400 Bad Request
```

**Response:**

```json
{
  "error": "Make, model and year are required."
}
```

### Example Invalid Request

```json
{
  "make": "Honda",
  "model": "City"
}
```

Since `year` is missing, the API returns a `400` error.

---

# 🎯 Conclusion

This project helped me understand the basics of **Express.js REST APIs** and how to interact with them using **Postman**. It is a starting point for building more advanced backend applications with databases such as MongoDB.
