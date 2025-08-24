interface Props {
  id: number;
  answer: string;
  setAnswerValue: (
    value:
      | number
      | ((prevState: number | undefined) => number | undefined)
      | undefined
  ) => void;
}

const AnswerBtn = ({ id, answer, setAnswerValue }: Props) => {
  return (
    <button
      data-value={id}
      className="bg-stone-200 px-5 min-h-20 block cursor-pointer outline-none text-lg font-semibold hover:bg-stone-300 focus:bg-green-500 rounded-md dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:focus:bg-green-600"
      onClick={() => setAnswerValue(id)}>
      <li>{answer}</li>
    </button>
  );
};

export default AnswerBtn;
