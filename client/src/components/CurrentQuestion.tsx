import { useState } from "react";
import CurrentQuestionNumber from "./CurrentQuestionNumber";
import QuestionName from "./QuestionName";
import QuestionAnswers from "./QuestionAnswers";
import NextQuestionBtn from "./NextQuestionBtn";
import type { QuestionObject } from "../interfaces/interfaces";

interface Props {
  setCorrectAnswers: (value: number | ((prevState: number) => number)) => void;
  totalQuestionsNumber: number;
  id: number;
  questions: QuestionObject[];
  setId: (value: number | ((prevState: number) => number)) => void;
}

const CurrentQuestion = ({
  setCorrectAnswers,
  totalQuestionsNumber,
  id,
  setId,
  questions,
}: Props) => {
  const [answerValue, setAnswerValue] = useState<number | undefined>(undefined);

  const addToResult = (answerValue: number | undefined): void => {
    if (answerValue !== undefined && answerValue === questions[id].correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  return (
    <div className="w-175 max-md:w-[90%] max-sm:pb-5">
      <CurrentQuestionNumber
        totalQuestionsNumber={totalQuestionsNumber}
        id={id}
      />
      <QuestionName name={questions[id].name} />
      <QuestionAnswers
        currentQuestionAnswers={questions[id].answers}
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

export default CurrentQuestion;
