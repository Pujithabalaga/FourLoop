const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

module.exports = connection;
// This code establishes a connection to a MySQL database using the mysql2 package and environment variables for configuration. It exports the connection for use in other parts of the application.