const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController.js");

router.get("/produto", produtoController.getAllProduto);

module.exports = router;
