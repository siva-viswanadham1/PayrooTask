# Server Apllication 

This is a backend application for Hotel Booking App, built with Node.js, Express, and MongoDB.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate into the project directory:
   cd project-name
3. Install dependencies:
   npm install
4.Set up environment variables:
Create a .env file in the root directory of the project and add the following variables:
PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

Usage
To start the server, run:
npm start
Dependencies:
bcrypt: Password hashing library
dotenv: Loads environment variables from a .env file into process.env
express: Web framework for Node.js
jsonwebtoken: JSON Web Token implementation for Node.js
mongoose: MongoDB object modeling tool
