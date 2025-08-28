import Loading from "./components/Loading";
import CurrentQuestion from "./components/CurrentQuestion";
import QuizSummary from "./components/QuizSummary";
import QuizSummaryDetails from "./components/QuizSummaryDetails";
import useQuiz from "./hooks/useQuiz";

const App = () => {
  const {
    questions,
    id,
    setId,
    isLoading,
    correctAnswers,
    setCorrectAnswers,
    totalQuestionsNumber,
    currentQuestion,
  } = useQuiz();
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
