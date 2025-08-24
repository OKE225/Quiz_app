import AnswerBtn from "./AnswerBtn";

interface Props {
  currentQuestionAnswers: string[];
  setAnswerValue: (
    value:
      | number
      | ((prevState: number | undefined) => number | undefined)
      | undefined
  ) => void;
}

const QuestionAnswers = ({ currentQuestionAnswers, setAnswerValue }: Props) => {
  return (
    <ol className="list-[lower-alpha] list-inside grid grid-cols-2 gap-4 max-w-300">
      {currentQuestionAnswers.map((answer, id) => (
        <AnswerBtn
          key={id}
          id={id}
          answer={answer}
          setAnswerValue={setAnswerValue}
        />
      ))}
    </ol>
  );
};

export default QuestionAnswers;
