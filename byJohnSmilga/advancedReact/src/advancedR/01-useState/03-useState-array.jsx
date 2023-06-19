import React from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        type="button"
        style={{
          marginTop: "2rem",
          padding: "1rem",
          color: "white",
          background: "blue",
        }}
        onClick={()=>{setPeople([])}}
      >
        Remove All
      </button>
    </div>
  );
};
export default UseStateArray;
