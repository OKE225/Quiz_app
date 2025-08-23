const mongo = require("mongodb");

const getAllQuestions = async (req, res) => {
  const client = new mongo.MongoClient(process.env.MONGO_URI);

  try {
    console.log("Connecting to database...");
    await client.connect();
    console.log("Connected successfully!");

    const db = client.db("quiz");
    console.log("Database selected:", db.databaseName);
    const quizQuestions = db.collection("questions");
    console.log("Collection selected");

    const quizQuestionsList = await quizQuestions.find().toArray();
    console.log("Questions found:", quizQuestionsList.length);
    res.json({ quizQuestionsList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  } finally {
    await client.close();
  }
};

module.exports = getAllQuestions;
