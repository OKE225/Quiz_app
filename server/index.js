const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Connect to server!" });
});

app.listen(3001, "localhost");
