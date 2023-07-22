import React, { useState } from "react";

const ErrorExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
