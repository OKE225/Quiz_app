import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const QuizSummary = ({ children }: Props) => {
  return (
    <>
      <h2 className="text-5xl font-light">Quiz Summary</h2>
      <p className="text-md">
        Your quiz results are in! Here's how you performed
      </p>
      {children}
    </>
  );
};

export default QuizSummary;
