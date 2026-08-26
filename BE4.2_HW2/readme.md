# BE4.2_HW2 – Hotel API

## PRD Checklist

### Project Overview

This project is a backend REST API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. The application allows users to add new hotel records to the MongoDB database through a POST API endpoint.

### Features Implemented

* Connected the application to MongoDB using Mongoose.
* Configured Express to handle JSON request bodies using `express.json()`.
* Created a reusable `createHotel()` function for adding hotel records.
* Created a Mongoose Hotel model.
* Implemented the **POST `/hotels`** API endpoint.
* Added success and error handling for the hotel creation operation.
* Returned the newly created hotel in the API response.

### API Endpoint

#### Create a New Hotel

**POST** `/hotels`

### Request Body

```json
{
  "name": "Lake View",
  "category": "Mid-Range",
  "location": "124 Main Street, Anytown",
  "rating": 3.2,
  "reviews": [],
  "website": "https://lake-view-example.com",
  "phoneNumber": "+1234555890",
  "checkInTime": "2:00 PM",
  "checkOutTime": "12:00 PM",
  "amenities": [
    "Laundry",
    "Boating"
  ],
  "priceRange": "$$$ (31-60)",
  "reservationsNeeded": true,
  "isParkingAvailable": false,
  "isWifiAvailable": true,
  "isPoolAvailable": false,
  "isSpaAvailable": false,
  "isRestaurantAvailable": false,
  "photos": [
    "https://example.com/hotel1-photo1.jpg",
    "https://example.com/hotel1-photo2.jpg"
  ]
}

```

## Project Structure

```text
BE2.4_HW3/
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

## Tech Stack

* **Node.js** – JavaScript runtime environment
* **Express.js** – Backend web framework
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB object modeling library

