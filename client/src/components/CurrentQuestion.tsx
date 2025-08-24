interface Props {
  totalQuestionsNumber: number;
  id: number;
}

const CurrentQuestion = ({ totalQuestionsNumber, id }: Props) => {
  const currentQuestionId: number = id + 1;
  return (
    <p>
      Question {currentQuestionId} of {totalQuestionsNumber}
    </p>
  );
};

export default CurrentQuestion;
