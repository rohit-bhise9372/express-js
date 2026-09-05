# BE5 - Model Referencing with Mongoose

A backend project demonstrating **Model Referencing** in MongoDB using **Node.js**, **Mongoose**, and **MongoDB Atlas**.

## Project Overview

This project demonstrates how to create relationships between collections using **Mongoose ObjectId references**. A **Post** document references a **User** document, allowing related data to be linked efficiently.

## Features Implemented

- Connected MongoDB Atlas with Mongoose
- Created **User** model
- Created **Post** model
- Implemented **Model Referencing** using `ObjectId`
- Added new user data
- Added post data linked to a user
- Used environment variables with `.env`
- Error handling using `try...catch`

## Tech Stack

- Node.js
- MongoDB Atlas
- Mongoose
- Dotenv

## Folder Structure

```text
BE5/
├── db/
│   └── db.connect.js
├── models/
│   ├── user.model.js
│   └── post.model.js
├── index.js
├── .env
├── package.json
└── package-lock.json
```

## Model Referencing

**User Model**

```js
{
  name: String,
  email: String
}
```

**Post Model**

```js
{
  content: String,
  likes: Number,
  comments: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}
```

Here, the `user` field stores the **ObjectId** of a User document, creating a relationship between the **Post** and **User** collections.

## Installation

```bash
npm install
node index.js
```

## Author

**Rohit Bhise**
