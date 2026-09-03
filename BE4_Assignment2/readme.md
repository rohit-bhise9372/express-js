# 🍽️ Recipe Management API

A RESTful backend API built with **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose** to manage recipe records.

## Project Overview

This application allows users to create, read, update, and delete recipes stored in a MongoDB database. It also supports searching recipes by title, author, and difficulty level with proper error handling.

## Features

* Create a new recipe
* Get all recipes
* Get a recipe by title
* Get recipes by author
* Get all Easy difficulty recipes
* Update recipe difficulty by ID
* Update prep time and cook time by title
* Delete a recipe by ID

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Postman

## Folder Structure

```text
├── db
│   └── db.connect.js
├── model
│   └── recipe.models.js
├── index.js
├── package.json
└── package-lock.json
```

## Installation

1. Clone the repository

```bash
git clone <your-repository-link>
```

2. Install dependencies

```bash
npm install express mongoose dotenv
```

3. Create a `.env` file

```env
MONGODB=your_mongodb_connection_string
```

4. Start the server

```bash
npm run dev
```

Server runs on **http://localhost:3000**

## API Endpoints

| Method | Endpoint                      | Description                      |
| ------ | ----------------------------- | -------------------------------- |
| POST   | `/recipes`                    | Create a new recipe              |
| GET    | `/recipes`                    | Get all recipes                  |
| GET    | `/recipes/:recipeTitle`       | Get recipe by title              |
| GET    | `/recipes/author/:authorName` | Get recipes by author            |
| GET    | `/recipes/difficulty/easy`    | Get Easy recipes                 |
| POST   | `/recipes/:recipeId`          | Update recipe difficulty by ID   |
| POST   | `/recipes/title/:recipeTitle` | Update prep & cook time by title |
| DELETE | `/recipes/:recipeId`          | Delete recipe by ID              |

## Author

**Rohit Bhise**

