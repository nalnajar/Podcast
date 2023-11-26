const db = require("./db");
const bcrypt = require("bcrypt");
const express = require("express");

const router = express.Router(); //router for the controller
/*
 * Gets a single user using an `id` value
 */
router.get("/:id", async (req, res) => {
  console.log("Selecting a user from the users table:");
  await db.query(
    `SELECT * FROM users WHERE id = ?`,
    [req.body.id],
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    }
  );
});
/*
 * Posts a new user to the database
 */
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body; //Get the body of the req into local vars
  const hashedPassword = await bcrypt.hash(password, 10); // Hash Password
  await db.query(
    `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`,
    [username, hashedPassword, email],
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(result);
        res.status(200).send("User Registered Successfully");
      }
    }
  );
}); //addUser

/*
 * POST a user in order to auth login from db
 */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  await db.query(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    async (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else if (result.length > 0) {
        const hashedPassword = result[0].password; // Assuming the hashed password is stored in a 'password' column

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if (passwordMatch) {
          res.status(200).send("Login Successful");
        } else {
          res.status(401).send("Incorrect Password"); //This should be just be a single status fai lindicating wrong username/pass
        }
      } else {
        res.status(404).send("User not found");
      }
    }
  );
});

/*
 * Deletes a single user using an `id` value
 */
router.delete("/deleteUser/:id", async (req, res) => {
  console.log("Deleting User via id");
  await db.query(
    `DELETE FROM users WHERE id=${req.body.id}`,
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send($`User {req.body.id} Registered Successfully`);
      }
    }
  );
});

/*
 * Gets all registered users from the database
 */
router.get("/users", async (req, res) => {
  console.log("Selecting all from the users table:");
  await db.query("SELECT * FROM users", (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(result);
  });
});

module.exports = router;
