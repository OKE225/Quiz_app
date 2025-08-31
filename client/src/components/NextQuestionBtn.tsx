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
  const handleClick = (): void => {
    setId((prev) => prev + 1);
    setAnswerValue(undefined);
    addToResult(answerValue);
  };

  return (
    <button
      className="cursor-pointer mt-4 p-1 w-full text-lg border border-3 border-stone-300 hover:bg-stone-300 rounded-md disabled:cursor-default disabled:border-stone-100 disabled:text-stone-300 disabled:bg-transparent dark:border-zinc-800 dark:hover:bg-zinc-800 disabled:dark:border-zinc-900 disabled:dark:text-zinc-700 disabled:dark:hover:bg-transparent"
      disabled={answerValue === undefined}
      onClick={handleClick}>
      Next question →
    </button>
  );
};

export default NextQuestionBtn;
