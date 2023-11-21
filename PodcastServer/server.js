//IMPORTS
import express from "express";
import bodyParser from "body-parser";
import moment from "moment";
import mysql from "mysql";
import fs from "fs";

// Constant Values
const SERVER_ADDRESS = "127.0.0.1";
const PORT = "8081";

const TEST_DATABASE_CONNECTION = false;

//const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
//const fs = require("fs");
//const mysql = require("mysql");
//const moment = require("moment");

const con = mysql.createConnection({
  host: "sql9.freesqldatabase.com",
  user: "sql9654140",
  password: "HtufzUnhwd",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("USE sql9654140", () => {
    console.log("Using database 'sql9654140'");
  });

  if (TEST_DATABASE_CONNECTION == true) {
    // new user
    const user = {
      username: "testUser",
      email: "test@email.com",
      dateJoined: moment().format("YYYY-MM-DD HH:mm:ss a"),
      profileImage: null,
    };

    // add user
    console.log(`Adding new user with creds: ${JSON.stringify(user)}`);
    con.query(
      `INSERT INTO users (Username, Email) VALUES ('${user.username}', '${user.email}')`,
      (err, result, fields) => {
        if (err) throw err;
        console.log(result);
      }
    );

    // select all users
    console.log("Selecting all from the users table:");
    con.query("SELECT * FROM users", (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    });

    // delete user
    console.log("Deleting testUser via email (test@email.com)");
    con.query(
      "DELETE FROM users WHERE email='test@email.com'",
      (err, result, fields) => {
        if (err) throw err;
        console.log(result);
      }
    );

    // select all users
    console.log("Selecting all from the users table:");
    con.query("SELECT * FROM users", (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    });
  }
});

app.use(bodyParser.json());

// Read/Write methods will be depricated once the database is setup
/*
 *  readFile: reads text files and returns a string.
 */
const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error("Error reading the file:", error.message);
    return null;
  }
};
/*
 *  writeFile: writes object to file in JSON format.
 */
const writeFile = (filePath, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData);
    console.log("Data written to JSON file successfully.");
  } catch (error) {
    console.error("Error writing to the file:", error.message);
  }
};

/*
 * Gets all registered users from the database
 */
app.get("/getUsers", (req, res) => {
  //let data = readFile(__dirname + "/testdata/users.json");
  // console.log("getUsers:" + data);
  console.log("Selecting all from the users table:");
  con.query("SELECT * FROM users", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
  res.end(result);
});

/*
 * Gets a single user using an `id` value
 */
app.get("/getUsers/:id", (req, res) => {
  console.log("Selecting all from the users table:");
  con.query(
    `SELECT * FROM users WHERE id=${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    }
  );

  res.end(result);
});

/*
 * Posts a new user to the database
 */
app.post("/addUser", (req, res) => {
  var newUser = {
    username: "",
    email: "",
    dateJoined: moment().format("YYYY-MM-DD HH:mm:ss"),
  };

  console.log(req.body);

  var data = JSON.parse(readFile(__dirname + "/testdata/users.json"));

  newUser.id = data.users.length + 1;
  newUser.name = req.body.name;
  newUser.password = req.body.password;
  newUser.email = req.body.email;

  //this is NOT SAFE and WILL be replaced with SQL auto
  //generated id after it gets added
  try {
    data.users[data.users.length] = newUser;
  } catch (err) {
    console.log(err);
  }

  writeFile(__dirname + "/testdata/users.json", data);

  //remove in the end
  res.end(JSON.stringify(data.users));
});

/*
 * Deletes a single user using an `id` value
 */
app.delete("/deleteUser/:id", (req, res) => {
  console.log("Deleting User via id");
  con.query(
    `DELETE FROM users WHERE id=${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    }
  );

  //remove in the end
  // res.end(JSON.stringify(data.users));
  if (result.affectedRows !== undefined) res.end(result.affectedRows);
});

const server = app.listen(PORT, SERVER_ADDRESS, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
