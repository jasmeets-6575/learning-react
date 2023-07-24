import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App: React.FC = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};

export default App;
