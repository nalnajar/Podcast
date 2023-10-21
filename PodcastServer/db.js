const mysql = require('mysql');

//create tb connection
const db = mysql.createPool({
    connectionLimit: 10, //set limit
    // This should probs be hidden in an ENV file for futre
    host: 'sql9.freesqldatabase.com',
    user: 'sql9654140',
    password: 'HtufzUnwd'  
})