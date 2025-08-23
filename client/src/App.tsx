import { useEffect, useState } from "react";

interface Question {
  name: string;
  answers: string[];
  correct: number;
}

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [id, setId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [answerValue, setAnswerValue] = useState<number | undefined>(undefined);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => {
        const arr = data.quizQuestionsList;
        arr.sort(() => 0.5 - Math.random());

        setQuestions(arr);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const activeQuestionNumber = id + 1;
  const totalQuestions = questions.length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentCorrectAnswers = Math.round(
    (correctAnswers * 100) / totalQuestions
  );

  const addToResult = (answerValue: number | undefined) => {
    if (answerValue !== undefined && answerValue === questions[id].correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  return (
    <div className="m-1">
      {isLoading ? (
        <h1 className="">Connecting...</h1>
      ) : questions[id] ? (
        <div>
          <p>
            Question {activeQuestionNumber} of {totalQuestions}
          </p>
          <h1 className="">{questions[id].name}</h1>
          <ol className="list-[lower-alpha] list-inside grid grid-cols-2 gap-4 max-w-300">
            {questions[id].answers.map((answer, id) => (
              <button
                key={id}
                data-value={id}
                className="focus:bg-green-500 focus:text-black block cursor-pointer"
                onClick={() => setAnswerValue(id)}>
                <li>{answer}</li>
              </button>
            ))}
          </ol>
          <button
            className="bg-stone-700 absolute right-5 cursor-pointer"
            onClick={() => {
              setId((prev) => prev + 1);
              setAnswerValue(undefined);
              addToResult(answerValue);
            }}>
            Next question →
          </button>
        </div>
      ) : (
        <>
          <h2>Quiz Summary</h2>
          <p>Your quiz results are in! Here's how you performed:</p>
          <p>Correct answers: {correctAnswers}</p>
          <p>Incorrect answers: {incorrectAnswers}</p>
          <p>Total questions: {totalQuestions}</p>
          <p>
            Your score: {correctAnswers}/{totalQuestions} -{" "}
            {percentCorrectAnswers}%
          </p>
        </>
      )}
    </div>
  );
};

export default App;
