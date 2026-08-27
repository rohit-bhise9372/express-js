# Hotel API

A RESTful backend API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** to manage hotel data. This project supports creating, reading, updating, and deleting hotel records.

## Project Overview

The Hotel API allows users to store and manage hotel information in a MongoDB database. It provides endpoints to add hotels, retrieve hotel details, update hotel information, and delete hotels by their MongoDB ID.

## Features Implemented

- Create a new hotel
- Get all hotels
- Get a hotel by name
- Get hotels by category
- Get hotels by location
- Update hotel details
- Delete a hotel by ID
- MongoDB Atlas integration using Mongoose
- Express REST API with JSON support

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
| POST | `/hotels` | Add a new hotel |
| GET | `/hotels` | Get all hotels |
| GET | `/hotels/:hotelName` | Get hotel by name |
| GET | `/hotels/category/:hotelCategory` | Get hotels by category |
| GET | `/hotels/location/:hotelLocation` | Get hotels by location |
| PUT | `/hotels/:hotelId` | Update hotel details |
| DELETE | `/hotels/:hotelId` | Delete hotel by ID |

## Delete Hotel by ID

**Endpoint**

**Example**

```text
http://localhost:3000/hotels/68afdb77995bcad89c29834c
```

