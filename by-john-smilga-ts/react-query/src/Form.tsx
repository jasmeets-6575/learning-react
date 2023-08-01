import { useState, FormEvent } from "react";
import { useCreateTask } from "./reactQueryCustomHooks";

const Form: React.FC = () => {
  const [newItemName, setNewItemName] = useState<string>(""); // Add type annotation for the state
  const { createTask } = useCreateTask();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName("");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
