# Hostel Management System - Backend

This repository contains the backend for the project [Hostel Management System](https://github.com/mayankjain25/Hostel-Management-System). The backend is built on **Node JS** and **Express JS**. This system is designed to handle various functionalities required to manage hostel operations efficiently. It provides APIs to interact with the database and manage different aspects of the hostel.

## Technologies Used

- **Node.js**: Backend server is built using Node.js for its fast and scalable features.
- **Express**: Express is used as the web application framework to handle routing and middleware.
- **MongoDB**: MongoDB serves as the database to store all hostel-related data.
- **Mongoose**: Mongoose is used as an Object Data Modeling (ODM) library to interact with MongoDB.
- **bcrypt**: To securely hash passwords for user authentication.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (at least version 12.x)
- MongoDB (Make sure MongoDB server is running)

### Installation
1. Clone the repository:

```bash
git clone https://github.com/mayankjain25/Hostel-Management-System-Backend.git
cd Hostel-Management-System-Backend
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory.
Add the required environment variables like `PORT`, `MONGODB_URI` etc.

4. Start the server
```bash
npm start
```

## Usage
The backend server should now be running at `http://localhost:3000` or the port specified in the `.env` file.

Use Postman or any other API client to interact with the server and access the different endpoints.

## Developer
This project has been developed by [Mayank Jain](https://mayankjain25.netlify.app)
For any queries, you contact me at jainmayank2509@gmail.com