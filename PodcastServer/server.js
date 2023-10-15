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

app.use(bodyParser.json());

const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error("Error reading the file:", error.message);
    return null;
  }
};
const writeFile = (filePath, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData);
    console.log("Data written to JSON file successfully.");
  } catch (error) {
    console.error("Error writing to the file:", error.message);
  }
};

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

app.post("/addUser", async(req, res) => {
  try{
  //create a password that is hashed 10 times
  const hashedPassword = await bcrpty.hash(req.body.password, 10);

  var newUser = {
    id: 0, //missing logic to set id
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword, //Hashes a given users password
  }

  }catch{
    //Handle Errors
  }

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
  console.log("Example app listening at http://%s:%s", host, port);
});
