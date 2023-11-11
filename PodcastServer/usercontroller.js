const db = require("./db");
const bcrypt = require("bcrypt");
const express = require("express");

const router = express.Router(); //router for the controller
/*
 * Gets a single user using an `id` value
 */
router.get("/getUsers/:id", (req, res) => {
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
router.post("/register", async (req, res) => {
    const {username , password, email} = req.body //Get the body of the req into local vars
    const hashedPassword = await bcrypt.hash(password, 10) // Hash Password
    await db.query(`INSERT INTO users (username, password, email) VALUES (?, ?, ?)`,
    [username, hashedPassword, email],
    (err, result, fields) => {
        if (err) 
        {
          res.status(500).send(err);
        }
        else
        {
        console.log(result);
          res.status(200).send("User Registered Successfully");
        }
      }
    );
    });//addUser
    

/*
 * GETS a user in order to auth login from db
 */
router.get("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const users = await db.query(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );
            console.log(users[0]);
            console.log(username);
            //console.log(users);
        if (users.length > 0) {
            const hashedPassword = user[0].password; // Assuming the hashed password is stored in a 'password' column

            // Compare the provided password with the stored hashed password
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            if (passwordMatch) {
                res.status(200).send("Login Successful");
            } else {
                res.status(401).send("Incorrect Password");
            }
        } else {         
            res.status(404).send("User not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

/*
 * Deletes a single user using an `id` value
 */
router.delete("/deleteUser/:id", (req, res) => {
  console.log("Deleting User via id");
  db.query(
    `DELETE FROM users WHERE id=${req.params.id}`,
    (err, result, fields) => {
      if (err) 
      {
        res.status(500).send(err);
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
router.get("/users", async (req, res) =>  {
    console.log("Selecting all from the users table:");
    await db.query("SELECT * FROM users", (err, result, fields) => {
      if (err) throw err;
      res.send(result);
    });
  });

  module.exports = router;
