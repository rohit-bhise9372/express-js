# 🏨 Hotel Directory API

A backend REST API built with **Node.js, Express.js, MongoDB Atlas, and Mongoose** to retrieve hotel data. This project demonstrates how to create REST APIs, connect to MongoDB, and test endpoints using **Postman**.

---

## 📌 Project Overview

The Hotel Directory API allows users to fetch hotel information stored in a MongoDB database. Users can retrieve all hotels or search hotels by **name, phone number, rating, and category** through REST API endpoints.

---

## ✨ Features Implemented

- Connected Node.js application with MongoDB Atlas.
- Created a Hotel schema using Mongoose.
- Built REST APIs using Express.js.
- Read all hotels from the database.
- Read a hotel by its name.
- Read a hotel by its phone number.
- Read all hotels by rating.
- Read all hotels by category.
- Implemented async/await with proper error handling.
- Returned appropriate HTTP status codes (200, 404, 500).
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
hotel-directory-api/
│
├── db/
│   └── db.connect.js
│
├── models/
│   └── hotel.models.js
│
├── index.js
├── package.json
└── package-lock.json
```

## 📮 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/hotels` | Get all hotels |
| GET | `/hotels/:hotelName` | Get hotel by name |
| GET | `/hotels/directory/:phoneNumber` | Get hotel by phone number |
| GET | `/hotels/rating/:hotelRating` | Get hotels by rating |
| GET | `/hotels/category/:hotelCategory` | Get hotels by category |

---

## 🧪 API Testing

All REST API endpoints were successfully tested using **Postman**.

### Example Requests

```http
GET /hotels
GET /hotels/Sunset%20Resort
GET /hotels/directory/+1997687392
GET /hotels/rating/4
GET /hotels/category/Resort
```

---

## 📦 Dependencies

- express
- mongoose
- dotenv

---

## 👨‍💻 Author

**Rohit Bhise**

