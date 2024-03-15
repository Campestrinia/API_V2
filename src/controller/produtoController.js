const produtoService = require("../service/produto.js");

async function getAllProduto(req, res) {
  try {
    const rows = await produtoService.getAllProduto();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting produto",
      body: error.message,
    });
  }
}

module.exports = {
  getAllProduto,
};
