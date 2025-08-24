import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Question from "./components/Question";
import QuizSummary from "./components/QuizSummary";
import QuizSummaryDetails from "./components/QuizSummaryDetails";

interface QuestionObject {
  name: string;
  answers: string[];
  correct: number;
}

const App = () => {
  const [questions, setQuestions] = useState<QuestionObject[]>([]);
  const [id, setId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((response) => response.json())
      .then((data) => {
        const arr = data.quizQuestionsList;
        arr.sort(() => 0.5 - Math.random());

        setQuestions(arr);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const totalQuestionsNumber: number = questions.length;

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      {isLoading ? (
        <Loading />
      ) : questions[id] ? (
        <Question
          setCorrectAnswers={setCorrectAnswers}
          totalQuestionsNumber={totalQuestionsNumber}
          id={id}
          setId={setId}
          arrQuestions={questions}
        />
      ) : (
        <>
          <QuizSummary>
            <QuizSummaryDetails
              correctAnswers={correctAnswers}
              totalQuestionsNumber={totalQuestionsNumber}
            />
          </QuizSummary>
        </>
      )}
    </div>
  );
};

export default App;
