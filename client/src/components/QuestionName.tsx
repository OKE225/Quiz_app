interface Props {
  name: string;
}

const QuestionName = ({ name }: Props) => {
  return <h1 className="text-4xl mb-5 min-h-20">{name}</h1>;
};

export default QuestionName;
