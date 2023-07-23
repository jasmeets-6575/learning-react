import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

export interface DataType {
  id: number;
  title: string;
  info: string;
}

function App() {
  const [questions, setQuestions] = useState<DataType[]>(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default App;
