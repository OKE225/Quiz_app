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
  const [resultQuiz, setResultQuiz] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.quizQuestionsList);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const activeQuestionNumber = id + 1;
  const questionsLenght = questions.length;

  const addToResult = (answerValue: number | undefined) => {
    if (answerValue !== undefined && answerValue === questions[id].correct) {
      setResultQuiz((prev) => prev + 1);
    }
  };

  return (
    <div className="m-1">
      {isLoading ? (
        <h1 className="">Connecting...</h1>
      ) : questions[id] ? (
        <div>
          <p>
            Question {activeQuestionNumber} of {questionsLenght}
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
              addToResult(answerValue);
            }}>
            Next question →
          </button>
        </div>
      ) : (
        <>
          <h1>No more questions.</h1>
          <p>
            Your result is {resultQuiz} of {questionsLenght} questions
          </p>
        </>
      )}
    </div>
  );
};

export default App;
