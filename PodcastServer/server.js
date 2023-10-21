// Constant Values
const SERVER_ADDRESS = "127.0.0.1";
const PORT = "8081";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const bcrpty = require("bcrypt");
const passport = require("passport");
const { emit } = require("process");
const db = require('./db');
const { applyPairs } = require("angular-ui-router");

app.use(bodyParser.json());


//bypass cors error whiel testing
app.user(cors({
origin: 'http://localhost:3000',
credentials: true
}));

app.use(passport.initialize()); //inilize the use of passport.js
app.user(passport.session()); // allows a login sessions

/* const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error("Error reading the file:", error.message);
    return null;
  }
}; */
/* const writeFile = (filePath, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData);
    console.log("Data written to JSON file successfully.");
  } catch (error) {
    console.error("Error writing to the file:", error.message);
  }
}; */



app.get("/getUsers", function (req, res) {
  let data = readFile(__dirname + "/testdata/users.json");
  // console.log("getUsers:" + data);
  res.end(data);
});

app.get("/getUsers/:id", function (req, res) {
  let data = readFile(__dirname + "/testdata/users.json");

  var user = "user with ID:" + req.params.id + " doesn't exist";

  JSON.parse(data).users.forEach((element) => {
    if (element.id == req.params.id) {
      user = JSON.stringify(element);
    }
  });

  res.end(user);
});


//func to create and add a user to the data base
app.post("/register", async(req, res) => {
  try{
    //create a password that is hashed 10 times
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const insertQuery = "INSERT INTO users (`username`, `password`, `email`) VALUES (?, ?)";
    const selectQueryUsername = "SELECT * FROM users WHERE username = ?";

    await db.insertQuery(selectQueryUsername, [username], (err, results) => {
      if(err) {throw err;} //exit instantly if an error is hit
      if(results.length > 0) {
        //User is already in db
        res.send({message: "Username already exists"});
        //TODO ADD EMAIL CHECK
      }// end if( user exsiting)
      if (results.length === 0){
        //a new user!
        const hashedPassword = bcrpty.hash(req.body.password, 10);
        db.insertQuery(insertQuery, [username, hashedPassword, email], (err, results) => {
          if(err) {throw err;} //exit if error is hit
          res.send({message:"User Created"}); 
        })
      }
    });
  
    }catch{
      //Handle Errors
    }


}); //End Register New User


app.post("/addUser", async(req, res) => {

    //OLD 
  var oldUser = {
    name: "",
    password: "",
    email: "",
    id: 0,
  };

  console.log(req.body);

  var data = JSON.parse(readFile(__dirname + "/testdata/users.json"));

  oldUser.id = data.users.length + 1;
  oldUser.name = req.body.name;
  oldUser.password = req.body.password;
  oldUser.email = req.body.email;



  //this is NOT SAFE and WILL be replaced with SQL auto 
  //generated id after it gets added
  try {
    data.users[data.users.length] = oldUser;
  } catch (err) {
    console.log(err);
  }

  writeFile(__dirname + "/testdata/users.json", data);

  //remove in the end
  res.end(JSON.stringify(data.users));
});

app.delete("/deleteUser/:id", (req, res) => {
  // TODO
  var data = JSON.parse(readFile(__dirname + "/testdata/users.json"));

  for (var i = 0; i < data.users.length; i++){
    if (data.users[i].id == req.params.id){
      data.users[i] = undefined;
    }
  }

  writeFile(__dirname + "/testdata/users.json", data);

  //remove in the end
  res.end(JSON.stringify(data.users));
});

const server = app.listen(PORT, SERVER_ADDRESS, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});
