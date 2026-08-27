# Restaurant API

A RESTful backend API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** to manage restaurant data. This project supports creating, reading, and deleting restaurant records.

## Project Overview

This application allows users to manage restaurant information stored in MongoDB. It includes APIs to add new restaurants, retrieve restaurants using different filters, and delete a restaurant by its ID.

## Features Implemented

- Create a new restaurant
- Get all restaurants
- Get a restaurant by name
- Get a restaurant by phone number
- Get restaurants by cuisine
- Get restaurants by location
- Delete a restaurant by ID
- MongoDB Atlas database connection using Mongoose
- JSON request handling with Express

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
│   └── restaurant.models.js
├── index.js
├── package.json
└── package-lock.json
```

## API Endpoints

### Create Restaurant

**POST** `/restaurants`

```json
{
  "name": "Somi",
  "cuisine": ["Greek"],
  "location": "11 Main Road, Gem",
  "rating": 4.3,
  "phoneNumber": "+1234997390"
}
```

