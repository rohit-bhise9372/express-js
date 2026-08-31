# Restaurant API

A RESTful backend API built with **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose** to manage restaurant data.

## Project Overview

This project allows users to create, read, update, and delete (CRUD) restaurant records stored in a MongoDB database. The API can retrieve restaurants by different filters such as name, cuisine, phone number, and location.

## Features Implemented

- Create a new restaurant
- Get all restaurants
- Get a restaurant by name
- Get a restaurant by phone number
- Get restaurants by cuisine
- Get restaurants by location
- Update restaurant cuisine by ID
- Delete a restaurant by ID
- MongoDB Atlas integration with Mongoose
- RESTful API using Express.js

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

## Installation

1. Clone the repository

```bash
git clone <your-github-repository-link>
```

2. Go to the project folder

```bash
cd restaurant-api
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file

```env
MONGODB=your_mongodb_connection_string
```

5. Start the server

```bash
node index.js
```

Server runs at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/restaurants` | Create a new restaurant |
| GET | `/restaurants` | Get all restaurants |
| GET | `/restaurants/:restaurantName` | Get restaurant by name |
| GET | `/restaurants/directory/:phoneNumber` | Get restaurant by phone number |
| GET | `/restaurants/cuisine/:cuisineName` | Get restaurants by cuisine |
| GET | `/restaurants/location/:restaurantLocation` | Get restaurants by location |
| POST | `/restaurants/:restaurantId` | Update restaurant by ID |
| DELETE | `/restaurants/:restaurantId` | Delete restaurant by ID |


**Rohit Bhise**
