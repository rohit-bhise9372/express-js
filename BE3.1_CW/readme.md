# BE3.1_CW – Express.js Basics

## Project Overview

This project is a beginner-level backend application built using Express.js. It demonstrates how to create a basic web server and handle different HTTP GET requests using Express.js.

The application includes routes for a home page, about page, and contact page.

## Routes

| Method | Route      | Response                                                        |
| ------ | ---------- | --------------------------------------------------------------- |
| GET    | `/`        | Hello Express!                                                  |
| GET    | `/about`   | This is the about page                                          |
| GET    | `/contact` | Contact us at [contact@example.com](mailto:contact@example.com) |

## Project Structure

```text
BE3.1_CW/
│
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## File Description

### `index.js`

Contains the Express server configuration and all the application routes.

### `package.json`

Contains project information, dependencies, and scripts.

### `package-lock.json`

Contains the exact versions of installed npm packages and their dependencies.

### `.gitignore`

Specifies files and folders that should not be uploaded to GitHub, such as `node_modules` and `.env`.

## Technologies Used

* Node.js
* Express.js
* dotenv
* Git
* GitHub

## How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
node index.js
```

### 3. Open in Browser

```text
http://localhost:3000
```

You can also test:

```text
http://localhost:3000/about
http://localhost:3000/contact
```

