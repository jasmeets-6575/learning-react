import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ColorList from "./ColorList";
import Form from "./Form";
import ValuesLibrary from "values.js"; // Rename the import

const App: React.FC = () => {
  const [colors, setColors] = useState<any>(
    new ValuesLibrary("#f15025").all(10)
  );

  const addColor = (color: string) => {
    try {
      const newColors = new ValuesLibrary(color).all(10);
      setColors(newColors);
    } catch (error) {
      let msg = (error as Error).message;
      toast.error(msg);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
