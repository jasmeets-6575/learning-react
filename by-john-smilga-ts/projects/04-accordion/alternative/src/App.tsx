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
  const [activeId, setActiveId] = useState<number | null | number>(null);

  const toggleQuestion = (id: number) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default App;
