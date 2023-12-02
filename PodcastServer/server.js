import express from "express";
import cors from "cors";
import userController from "./usercontroller.js";
import postController from "./postcontroller.js";

// Constant Values
const app = express();
const SERVER_ADDRESS = "127.0.0.1";
const PORT = "8081";

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Middleware to parse JSON in request body

// Mount the userController routes
app.use("/", userController); //get rid of this one once the front-end is updated
app.use("/users", userController);
app.use("/posts", postController);

const server = app.listen(PORT, SERVER_ADDRESS, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Podcast app listening at http://%s:%s", host, port);
});
