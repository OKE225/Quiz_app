const express = require("express");
const mongo = require("mongodb");
const cors = require("cors");
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const client = new mongo.MongoClient("mongodb://127.0.0.1:27017");

  try {
    await client.connect();

    const db = client.db("test");
    const quizQuestions = db.collection("questions");

    const quizQuestionsList = await quizQuestions.find().toArray();
    res.json({ quizQuestionsList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  } finally {
    await client.close();
  }
});

app.listen(PORT, "localhost", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
