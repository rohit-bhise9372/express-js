# Hotel API

A RESTful backend API built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose** to manage hotel data.

## Project Overview

This API allows users to perform CRUD operations on hotel records, including creating, reading, updating hotel ratings, and deleting hotels by ID.

## Features Implemented

- Add a new hotel
- Get all hotels
- Get hotel by name
- Get hotel by phone number
- Get hotels by rating
- Get hotels by category
- Update hotel rating by ID
- Delete hotel by ID

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Folder Structure

```text
├── db
│   └── db.connect.js
├── models
│   └── hotel.models.js
├── index.js
├── package.json
└── package-lock.json
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/hotels` | Create a hotel |
| GET | `/hotels` | Get all hotels |
| GET | `/hotels/:hotelName` | Get hotel by name |
| GET | `/hotels/directory/:phoneNumber` | Get hotel by phone number |
| GET | `/hotels/rating/:hotelRating` | Get hotels by rating |
| GET | `/hotels/category/:hotelCategory` | Get hotels by category |
| POST | `/hotels/:hotelId` | Update hotel rating |
| DELETE | `/hotels/:hotelId` | Delete hotel |


