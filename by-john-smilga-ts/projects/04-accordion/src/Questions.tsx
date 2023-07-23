import { DataType } from "./App";
import SingleQuestion from "./SingleQuestion";

interface DataTypeProps {
  questions: DataType[];
}

const Questions: React.FC<DataTypeProps> = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion key={question.id} {...question}></SingleQuestion>
        );
      })}
    </section>
  );
};
export default Questions;
