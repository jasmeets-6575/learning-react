import { useState, useReducer } from "react";
import { data } from "../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import reducer, { Action } from "./reducer";

interface Person {
  id: number;
  name: string;
}
interface State {
  people: Person[];
  isLoading: boolean;
}
const defaultState: State = {
  people: data,
  isLoading: false,
};

const ReducerBasics: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id: number) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {state.people.map((person: Person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
