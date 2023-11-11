
const express = require("express");
const cors = require("cors");
const db = require("./db");
const userController = require("./usercontroller");

// Constant Values
const app = express();
const SERVER_ADDRESS = "127.0.0.1";
const PORT = "8081";

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Middleware to parse JSON in request body

// Mount the userController routes
app.use("/", userController);

const server = app.listen(PORT, SERVER_ADDRESS, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Podcast app listening at http://%s:%s", host, port);
});
