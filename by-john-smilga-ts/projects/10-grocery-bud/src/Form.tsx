import React, { useState } from "react";
import { toast } from "react-toastify";

interface FormProps {
  addItem: (itemName: string) => void;
}

const Form: React.FC<FormProps> = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
