# BE3.1_HW1 – Express.js Routes

## Project Overview

This project is a beginner-level backend application built using Express.js. It demonstrates how to create an Express server and handle multiple GET requests using different routes.

The application provides routes for products, services, FAQs, and a gallery, with a different response for each route.

## Routes

| Method | Route       | Response                    |
| ------ | ----------- | --------------------------- |
| GET    | `/`         | Hello, Express JS           |
| GET    | `/products` | Browse our products here.   |
| GET    | `/services` | Explore our services.       |
| GET    | `/faq`      | Frequently Asked Questions. |
| GET    | `/gallery`  | View our gallery.           |

## Project Structure

```text
BE3.1_HW1/
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

> `node_modules/` and `.env` should be excluded from GitHub using `.gitignore`.

## Technologies Used

* Node.js
* Express.js
* dotenv
* Git
* GitHub

## How to Run the Project

### 1. Install Dependencies

```bash
npm init -y
npm install express
npm install dotenv
```

### 2. Start the Server

```bash
node index.js
```

## Available Routes

| Method | URL | Description |
|---|---|---|
| GET | `/` | Displays the home page message |
| GET | `/products` | Displays the products message |
| GET | `/services` | Displays the services message |
| GET | `/faq` | Displays the FAQ message |
| GET | `/gallery` | Displays the gallery message |


## Author

**Rohit Bhise**

