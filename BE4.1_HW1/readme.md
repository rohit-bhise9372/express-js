# 🍽️ Restaurant Directory API

A backend REST API built with **Node.js, Express.js, MongoDB Atlas, and Mongoose** to retrieve restaurant data. The project demonstrates how to create REST endpoints, connect to MongoDB, and test APIs using **Postman**.

---

## 📌 Project Overview

The Restaurant Directory API allows users to fetch restaurant information from a MongoDB database. Users can retrieve all restaurants or search by **name, phone number, cuisine, and location** through REST API endpoints.

---

## ✨ Features Implemented

- Connected Node.js application with MongoDB Atlas.
- Created a Restaurant schema using Mongoose.
- Built REST APIs using Express.js.
- Read all restaurants from the database.
- Read a restaurant by its name.
- Read a restaurant by its phone number.
- Read all restaurants by cuisine.
- Read all restaurants by location.
- Implemented async/await with proper error handling.
- Tested all API endpoints using Postman.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- Postman

---

## 📁 Project Structure

```text
restaurant-directory-api/
│
├── db/
│   └── db.connect.js
│
├── models/
│   └── restaurant.models.js
│
├── index.js
├── package.json
└── package-lock.json
```

## 📮 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/restaurants` | Get all restaurants |
| GET | `/restaurants/:restaurantName` | Get restaurant by name |
| GET | `/restaurants/directory/:phoneNumber` | Get restaurant by phone number |
| GET | `/restaurants/cuisine/:cuisineName` | Get restaurants by cuisine |
| GET | `/restaurants/location/:restaurantLocation` | Get restaurants by location |

---

## 🧪 API Testing

All REST API endpoints were successfully tested using **Postman**.

Example requests:

```http
GET /restaurants
GET /restaurants/Yo%20China
GET /restaurants/directory/+1288997392
GET /restaurants/cuisine/Chinese
GET /restaurants/location/MG%20Road,%20Bangalore
```

---

## 📦 Dependencies

- express
- mongoose
- dotenv

---

## 👨‍💻 Author

**Rohit Bhise**
