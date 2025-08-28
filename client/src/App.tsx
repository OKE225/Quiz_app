import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import CurrentQuestion from "./components/CurrentQuestion";
import QuizSummary from "./components/QuizSummary";
import QuizSummaryDetails from "./components/QuizSummaryDetails";
import type { QuestionObject } from "./interfaces/interfaces";

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
        const randomSortArr = arr.sort(() => 0.5 - Math.random());

        setQuestions(randomSortArr);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const totalQuestionsNumber: number = questions.length;
  const currentQuestion: QuestionObject = questions[id];

  return (
    <div className="dark h-screen flex items-center justify-center flex-col text-zinc-950 dark:text-zinc-50 dark:bg-zinc-950">
      {isLoading ? (
        <Loading />
      ) : currentQuestion ? (
        <CurrentQuestion
          setCorrectAnswers={setCorrectAnswers}
          totalQuestionsNumber={totalQuestionsNumber}
          id={id}
          setId={setId}
          questions={questions}
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
