import React from "react";

const multipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const sayHello = () => {
    console.log("Hello there");
  };
  sayHello();

  useEffect(() => {
    console.log("hello from useEffect");
  }, [value]);
  useEffect(() => {
    console.log("hello from second useEffect");
  }, [secondValue]);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        Click me
      </button>
    </div>
  );
};

export default multipleEffects;
