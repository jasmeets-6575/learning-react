import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";
import { useState } from "react";

interface Item {
  id: string;
  title: string;
  isDone: boolean;
}

const defaultItems: Item[] = [
  { id: nanoid(), title: "walk the dog", isDone: false },
  { id: nanoid(), title: "wash dishes", isDone: false },
  { id: nanoid(), title: "drink coffee", isDone: true },
  { id: nanoid(), title: "take a nap", isDone: false },
];

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(defaultItems); // Add type annotation for the 'items' state
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items items={items} />
    </section>
  );
};

export default App;
