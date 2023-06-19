import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(()=>{
        setValue((currentState)=>{
            const newState =currentState +1;
            console.log(newState);
            return newState;
        })
    },2000)
  };
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
