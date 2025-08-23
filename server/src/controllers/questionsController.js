const mongo = require("mongodb");

const getAllQuestions = async (req, res) => {
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
};

module.exports = { getAllQuestions };
