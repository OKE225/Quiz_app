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
      className="focus:bg-green-500 focus:text-black block cursor-pointer"
      onClick={() => setAnswerValue(id)}>
      <li>{answer}</li>
    </button>
  );
};

export default AnswerBtn;
