import { useEffect, useState } from "react";
import type { QuestionObject } from "../interfaces/interfaces";

const useQuiz = () => {
  const [questions, setQuestions] = useState<QuestionObject[]>([]);
  const [id, setId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((response) => response.json())
      .then((data) => {
        const arr = data.quizQuestionsList;
        const randomSortArr = arr.sort(() => 0.5 - Math.random());

        setQuestions(randomSortArr);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return {
    questions,
    id,
    setId,
    isLoading,
    correctAnswers,
    setCorrectAnswers,
    totalQuestionsNumber: questions.length,
    currentQuestion: questions[id],
  };
};

export default useQuiz;
