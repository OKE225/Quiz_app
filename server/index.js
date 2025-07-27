const express = require("express");
const cors = require("cors");

const port = 5000;

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  // http://localhost:5000/api
  res.json({ message: "Message from NodeJS!" });
});

app.listen(port, () => {
  console.log(`Serwer listening at http://localhost:${port}/api`);
});
