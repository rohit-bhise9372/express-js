# Express Movie and Item API

## Project Overview

This project is an Express.js API that manages predefined movie and item data using arrays.

## Features

* GET route for the home page
* GET route to retrieve all movies
* POST route to update a movie by ID
* DELETE route for movies
* GET route to retrieve all items
* POST route to update an item by ID
* DELETE route for items
* Error handling when a movie or item is not found
* JSON request handling using Express

## API Endpoints

| Method | Endpoint         | Description                                      |
| ------ | ---------------- | ------------------------------------------------ |
| GET    | `/`              | Returns the Express server message               |
| DELETE | `/movies/delete` | Deletes a movie                                  |
| GET    | `/movies`        | Returns all movies                               |
| DELETE | `/items/delete`  | Deletes an item                                  |
| GET    | `/items`         | Returns all items                                |
| POST   | `/movies/update` | Updates a movie using data from the request body |
| POST   | `/items/update`  | Updates an item using data from the request body |

## Technologies Used

* Node.js
* Express.js
* Postman

## Running the Project

Start the server using:

```bash
npm run dev
```
## Testing

All API endpoints can be tested using Postman with the appropriate HTTP methods and request bodies.

