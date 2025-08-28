interface Props {
  correctAnswers: number;
  totalQuestionsNumber: number;
}

const QuizSummaryDetails = ({
  correctAnswers,
  totalQuestionsNumber,
}: Props) => {
  const incorrectAnswers: number = totalQuestionsNumber - correctAnswers;
  const percentCorrectAnswers: number = Math.round(
    (correctAnswers * 100) / totalQuestionsNumber
  );
  return (
    <div className="mt-15 text-xl ">
      <p>Total questions: {totalQuestionsNumber}</p>
      <p>
        Correct answers:{" "}
        <span className="text-green-600 dark:text-green-500">
          {correctAnswers}
        </span>
      </p>
      <p>
        Incorrect answers:{" "}
        <span className="text-red-600 dark:text-red-500">
          {incorrectAnswers}
        </span>
      </p>
      <p className="mt-2">
        Your score:{" "}
        <span className="font-semibold">
          {correctAnswers}/{totalQuestionsNumber}
        </span>{" "}
        - <span className="font-semibold">{percentCorrectAnswers}%</span>
      </p>
    </div>
  );
};

export default QuizSummaryDetails;
