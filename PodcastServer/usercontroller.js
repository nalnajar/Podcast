const db = require("./db");
/*
 * Gets a single user using an `id` value
 */
app.get("/getUsers/:id", (req, res) => {
  console.log("Selecting all from the users table:");
  db.query(
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
app.post("/register", (req, res) => {
db.query(`INSERT INTO users (id, username, password, email) VALUES (?, ?, ?, ?)`,
[10, req.body.username, req.body.password, req.body.email],
(err, result, fields) => {
    if (err) 
    {
      res.send(err);
    }
    else
    {
      res.send("User Registered Successfully");
    }
  }
);
});//addUser

/*
 * Deletes a single user using an `id` value
 */
app.delete("/deleteUser/:id", (req, res) => {
  console.log("Deleting User via id");
  db.query(
    `DELETE FROM users WHERE id=${req.params.id}`,
    (err, result, fields) => {
      if (err) 
      {
        res.send(err);
      }
      else
      {
        res.send("User Registered Successfully");
      }
      
      console.log(result);
    }
  );

  //remove in the end
  // res.end(JSON.stringify(data.users));
  if (result.affectedRows !== undefined) res.end(result.affectedRows);
});

/*
 * Gets all registered users from the database
 */
app.get("/getUsers", (req, res) => {
    //let data = readFile(__dirname + "/testdata/users.json");
    // console.log("getUsers:" + data);
    console.log("Selecting all from the users table:");
    db.query("SELECT * FROM users", (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    });
    res.end(result);
  });
