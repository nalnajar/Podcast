
const express = require("express");
const cors = require("cors");
const db = require("./db");
const moment = require("moment");

// Constant Values
const app = express();
const SERVER_ADDRESS = "127.0.0.1";
const PORT = "8081";

app.use(cors()); // Enable CORS for all routes

const server = app.listen(PORT, SERVER_ADDRESS, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
