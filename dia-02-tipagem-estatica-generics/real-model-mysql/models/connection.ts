const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});