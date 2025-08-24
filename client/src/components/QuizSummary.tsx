import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const QuizSummary = ({ children }: Props) => {
  return (
    <>
      <h2>Quiz Summary</h2>
      <p>Your quiz results are in! Here's how you performed:</p>
      {children}
    </>
  );
};

export default QuizSummary;
