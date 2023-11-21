const db = require("./db");
const express = require("express");

const router = express.Router();

const table = "posts";

// Ping the controller
router.get("/", async (req, res) => {
  console.log("HIT /posts controller");
});

// Get Calls
/*
 * Get a single post via id
 */
router.get("/getOne/:id", async (req, res) => {
  console.log("posts/getOne/:id HIT");
  await db.query(
    `SELECT 1 FROM ${table} WHERE id=${req.params.id}`,
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    }
  );
});

/*
 * Get all posts
 */
router.get("/getAll", async (req, res) => {
  console.log("posts/getAll HIT");
  await db.query(`SELECT * FROM ${table}`, (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(result);
  });
});

/*
 * Get all post from userid
 */
router.get("/getAllFromUser/:userid"),
  async (req, res) => {
    console.log("posts/getAllFromUser/:id HIT");
    await db.query(
      `SELECT * FROM ${table} WHERE userid=${req.params.userid}`,
      (err, result, fields) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send(result);
      }
    );
  };

/*
 * Get posts with search
 */
router.get("/search/:title"),
  async (req, res) => {
    console.log("posts/search/:title HIT");
    await db.query(
      `SELECT * FROM ${table} WHERE title=${req.params.title}`,
      (err, result, fields) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send(result);
      }
    );
  };

// Post Calls
/*
 * Add post
 */
router.post("/postOne", async (req, res) => {
  const post = {
    title: req.body.title,
    text: req.body.text,
    url: req.body.url,
    userid: req.body.userid,
  };
  const query = `INSERT INTO posts (title, text, url, userid) VALUES (${post.title}, ${post.text}, ${post.userid}, ${post.url})`;
  await db.query(query, (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(result);
        res.status(200).send("Post Uploaded Successfully");
      }
    }
  });
});

// Delete Calls
router.delete("/deleteOne/:id", async (req, res) => {
  console.log("Deleting User via id");
  await db.query(
    `DELETE FROM posts WHERE id=${req.body.id}`,
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send($`User {req.body.id} Registered Successfully`);
      }
    }
  );
});

module.exports = router;
