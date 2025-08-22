import { useEffect, useState } from "react";

interface Question {
  name: string;
  answers: string[];
  correct: number;
}

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionId, setQuestionId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.quizQuestionsList);
        // console.log(data.quizQuestionsList);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  // for (let i = 0; i <= questions.length; i++) {
  //   console.log(questions[i]);
  // }

  console.log(questionId);

  return (
    <div className="m-1">
      {isLoading ? (
        <h1 className="">Connecting...</h1>
      ) : questions[questionId] ? (
        <div>
          <h1 className="">{questions[questionId].name}</h1>
          <ol className="list-[lower-alpha] list-inside grid grid-cols-2 gap-4 max-w-300">
            {questions[questionId].answers.map((answer, id) => (
              <button
                key={id}
                data-value={id}
                className="focus:bg-green-500 block cursor-pointer"
                // onClick={() => console.log(id)}
              >
                <li>{answer}</li>
              </button>
            ))}
          </ol>
          <button
            className="bg-stone-700 absolute right-5 cursor-pointer"
            onClick={() => setQuestionId((prev) => prev + 1)}>
            Next question →
          </button>
        </div>
      ) : (
        <h1>No more questions</h1>
      )}
    </div>
  );
};
Implement simple quiz app functionality for testing
export default App;
