const express = require("express");
const userRouter = require("./router/userRouter.js");
const produtoRouter = require("./router/produtoRouter.js");

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello Word!</h1>`);
});

app.use("/api", userRouter);
app.use("/api", produtoRouter);

app.listen(PORT, () => {
  console.log("Servidor oline");
  console.log(`/localhost:${PORT}`);
});
