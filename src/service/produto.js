const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllProduto() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM produto");

  await connection.end();

  return rows;
}

module.exports = {
  getAllProduto,
};
