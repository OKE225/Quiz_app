interface Props {
  totalQuestionsNumber: number;
  id: number;
}

const CurrentQuestionNumber = ({ totalQuestionsNumber, id }: Props) => {
  const currentQuestionId: number = id + 1;
  return (
    <p className="text-lg">
      {currentQuestionId} of {totalQuestionsNumber}
    </p>
  );
};

export default CurrentQuestionNumber;
