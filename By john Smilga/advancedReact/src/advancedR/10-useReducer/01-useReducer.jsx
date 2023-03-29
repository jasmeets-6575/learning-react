import React, { useReducer } from "react";
import { data } from "../../data";

const defaultState = {
  people:data,
}

const reducer = ()=> {};


const ReducerBasics = () => {
  const [state,dispatch] = useReducer(reducer,defaultState);  

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
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

      {people.length < 1 ? (
        <button className="btn" onClick={resetList}>
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => setPeople([])}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
