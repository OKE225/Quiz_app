import { useState } from "react";
import CurrentQuestion from "./CurrentQuestion";
import QuestionName from "./QuestionName";
import QuestionAnswers from "./QuestionAnswers";
import NextQuestionBtn from "./NextQuestionBtn";

interface QuestionObject {
  name: string;
  answers: string[];
  correct: number;
}

interface Props {
  setCorrectAnswers: (value: number | ((prevState: number) => number)) => void;
  totalQuestionsNumber: number;
  id: number;
  arrQuestions: QuestionObject[];
  setId: (value: number | ((prevState: number) => number)) => void;
}

const Question: React.FC<Props> = ({
  setCorrectAnswers,
  totalQuestionsNumber,
  id,
  setId,
  arrQuestions,
}) => {
  const [answerValue, setAnswerValue] = useState<number | undefined>(undefined);

  const addToResult = (answerValue: number | undefined) => {
    if (answerValue !== undefined && answerValue === arrQuestions[id].correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  return (
    <div className="w-175">
      <CurrentQuestion totalQuestionsNumber={totalQuestionsNumber} id={id} />
      <QuestionName name={arrQuestions[id].name} />
      <QuestionAnswers
        currentQuestionAnswers={arrQuestions[id].answers}
        setAnswerValue={setAnswerValue}
      />

      <NextQuestionBtn
        setId={setId}
        setAnswerValue={setAnswerValue}
        addToResult={addToResult}
        answerValue={answerValue}
      />
    </div>
  );
};

export default Question;
