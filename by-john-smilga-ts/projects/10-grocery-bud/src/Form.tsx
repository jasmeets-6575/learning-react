import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { FormType } from "./Types";

const Form: React.FC<FormType> = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNewItemName(event.target.value)
          }
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
