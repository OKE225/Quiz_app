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
    <>
      <p>Correct answers: {correctAnswers}</p>
      <p>Incorrect answers: {incorrectAnswers}</p>
      <p>Total questions: {totalQuestionsNumber}</p>
      <p>
        Your score: {correctAnswers}/{totalQuestionsNumber} -{" "}
        {percentCorrectAnswers}%
      </p>
    </>
  );
};

export default QuizSummaryDetails;
