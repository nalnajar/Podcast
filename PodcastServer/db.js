const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql9.freesqldatabase.com",
  user: "sql9654140",
  password: "HtufzUnhwd",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  db.query("USE sql9654140", () => {
    console.log("Using database 'sql9654140'");
  });
});

module.exports = db;