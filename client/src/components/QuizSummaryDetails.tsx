interface Props {
  correctAnswers: number;
  totalQuestionsNumber: number;
}

const QuizSummaryDetails: React.FC<Props> = ({
  correctAnswers,
  totalQuestionsNumber,
}) => {
  const incorrectAnswers: number = totalQuestionsNumber - correctAnswers;
  const percentCorrectAnswers: number = Math.round(
    (correctAnswers * 100) / totalQuestionsNumber
  );
  return (
    <div className="mt-10 text-xl px-20 py-5 border border-2 border-stone-500 rounded-md">
      <p>
        Correct answers:{" "}
        <span className="text-green-600 font-semibold">{correctAnswers}</span>
      </p>
      <p>
        Incorrect answers:{" "}
        <span className="text-red-600 font-semibold">{incorrectAnswers}</span>
      </p>
      <p>Total questions: {totalQuestionsNumber}</p>
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
