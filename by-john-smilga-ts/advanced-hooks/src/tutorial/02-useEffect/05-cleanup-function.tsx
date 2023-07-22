import React, { useEffect, useState } from "react";

const CleanupFunction: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent: React.FC = () => {
  useEffect(() => {
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);

    return () => clearInterval(intID);
  }, []);

  return <h1>hello there</h1>;
};

export default CleanupFunction;
