import React, { useState } from "react";
interface Person {
  name: string;
  age: number;
  hobby: string;
}
const UseStateObject: React.FC = () => {
  const [person, setPerson] = useState<Person>({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
    // be careful, don't overwrite
    // setPerson({ name: 'susan' });
    setPerson({ ...person, name: "susan" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
