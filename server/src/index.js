const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const getAllQuestions = require("./controllers/questionsController");

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", getAllQuestions);

app.listen(PORT, "localhost", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
