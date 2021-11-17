const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'carol-benichio',
  password: '18041996',
  database: 'rest_exercicios'});

module.exports = connection;