interface Props {
  name: string;
}

const QuestionName = ({ name }: Props) => {
  return <h1>{name}</h1>;
};

export default QuestionName;
