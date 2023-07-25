import React, { useState, useEffect } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

interface Item {
  name: string;
  completed: boolean;
  id: string;
}

const App: React.FC = () => {
  const addItem = (itemName: string): void => {
    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems: Item[] = [...items, newItem];
    toast.success("item added to the list");
  };

  const removeItem = (itemId: string): void => {
    const newItems: Item[] = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("item deleted");
  };

  const editItem = (itemId: string): void => {
    const newItems: Item[] = items.map((item) => {
      if (item.id === itemId) {
        const newItem: Item = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
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
