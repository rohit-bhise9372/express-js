# BE2.4_HW2 – Restaurant API

## PRD Checklist

### Project Overview

This project is a backend REST API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. It allows users to add new restaurant records to a MongoDB database by sending JSON data through an HTTP POST request.

### Features Implemented

- Connected the application to MongoDB using Mongoose.
- Configured Express to parse JSON request bodies with `express.json()`.
- Created a reusable `createRestaurant()` function to save restaurant data.
- Implemented the **POST `/restaurants`** endpoint.
- Added proper success (`201`) and error (`500`) responses.

---

## API Endpoint

### Add a New Restaurant

**POST** `/restaurants`

### Sample Request Body

```json
{
  "name": "Somi",
  "cuisine": ["Greek"],
  "location": "11 Main Road, Gem",
  "rating": 4.3,
  "reviews": [],
  "website": "https://somi-example.com",
  "phoneNumber": "+1234997390",
  "openHours": "Tue-Sun: 11:00 AM - 10:00 PM",
  "priceRange": "$$ (11-30)",
  "reservationsNeeded": false,
  "isDeliveryAvailable": true,
  "menuUrl": "https://somi-example.com/menu",
  "photos": [
    "https://example.com/somi-photo1.jpg",
    "https://example.com/somi-photo2.jpg"
  ]
}
```

### Success Response

```json
{
  "message": "Restaurant added successfully.",
  "restaurant": {
    "_id": "64f123abc456...",
    "name": "Somi",
    "cuisine": ["Greek"],
    "location": "11 Main Road, Gem",
    "rating": 4.3
  }
}

## Project Structure

```text
BE2.4_HW2/
│── db/
│   └── db.connect.js
│── models/
│   └── restaurant.models.js
│── index.js
│── package.json
│──package-lock.json
└── readme.md
```

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---
