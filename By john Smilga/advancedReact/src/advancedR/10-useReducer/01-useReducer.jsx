import React, { useReducer } from "react";
import { data } from "../../data";

const defaultState = {
  people: data,
  isLoading :false,
};

const reducer = (state, action) => {
  if (action.type === "CLEAR_LIST") {
    return { ...state , people:[] };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
    // setPeople(data);
  };

  const resetList = () => {
    // setPeople(data);
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button className="btn" onClick={resetList}>
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
