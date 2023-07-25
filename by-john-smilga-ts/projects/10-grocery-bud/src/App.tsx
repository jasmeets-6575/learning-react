import React, { useState, useEffect } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

interface TodoItem {
  name: string;
  completed: boolean;
  id: string;
}

const getLocalStorage = (): TodoItem[] => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const setLocalStorage = (items: TodoItem[]): void => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>(getLocalStorage);

  const addItem = (itemName: string): void => {
    const newItem: TodoItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems: TodoItem[] = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (itemId: string): void => {
    const newItems: TodoItem[] = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  const editItem = (itemId: string): void => {
    const newItems: TodoItem[] = items.map((item) => {
      if (item.id === itemId) {
        const newItem: TodoItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  useEffect(() => {
    setLocalStorage(items);
  }, [items]);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
