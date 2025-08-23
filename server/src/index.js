const express = require("express");
const cors = require("cors");
const { getAllQuestions } = require("./controllers/questionsController");
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", getAllQuestions);

app.listen(PORT, "localhost", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
