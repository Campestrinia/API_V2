const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createProdutoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS produto(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            descricao VARCHAR(255) NOT NULL,
            quantidadeEstoque VARCHAR(255) NOT NULL,
            unidadeMedida VARCHAR(255) NOT NULL,
            valorUnidade VARCHAR(255) NOT NULL
        )`);

    await connection.end();
    console.log("Tabela produto Created");
  } catch (error) {
    console.log(`Error creating table produto ${error}`);
  }
}
createProdutoTable();

// Para executar node .\src\migrations\003-create-produto-tabela.js(caminho)
