interface Props {
  setId: (value: number | ((prevState: number) => number)) => void;
  setAnswerValue: (
    value:
      | number
      | ((prevState: number | undefined) => number | undefined)
      | undefined
  ) => void;
  addToResult: (answerValue: number | undefined) => void;
  answerValue: number | undefined;
}

const NextQuestionBtn = ({
  setId,
  setAnswerValue,
  addToResult,
  answerValue,
}: Props) => {
  const handleClick = () => {
    setId((prev) => prev + 1);
    setAnswerValue(undefined);
    addToResult(answerValue);
  };

  return (
    <button
      className="bg-stone-700 absolute right-5 cursor-pointer"
      onClick={handleClick}>
      Next question →
    </button>
  );
};

export default NextQuestionBtn;
