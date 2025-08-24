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
      className="bg-stone-200 px-5 min-h-20 block cursor-pointer outline-none text-lg font-semibold hover:bg-stone-300 focus:bg-green-500 rounded-md"
      onClick={() => setAnswerValue(id)}>
      <li>{answer}</li>
    </button>
  );
};

export default AnswerBtn;
