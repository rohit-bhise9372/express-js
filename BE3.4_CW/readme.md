# Car Management REST API

A simple REST API built using **Node.js** and **Express.js** to perform CRUD operations on an in-memory array of car data.

## Features

- Get all cars
- Add a new car
- Update an existing car by ID
- Delete a car by ID
- JSON request handling using Express middleware

## Tech Stack

- Node.js
- Express.js

## Project Structure

```bash
car-management-api/
│── index.js
│── package.json
└── README.md
```

## Testing

Use **Postman** or **Thunder Client** to test the following endpoints:

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Welcome route |
| GET | `/cars` | Get all cars |
| POST | `/cars` | Add new car |
| POST | `/cars/:id` | Update car by ID |
| DELETE | `/cars/:id` | Delete car by ID |

## Author

**Rohit Bhise**

Built as part of an Express.js CRUD practice assignment.
