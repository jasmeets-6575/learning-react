import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent/>}
    </div>
  );
};

const RandomComponent = () => {
    useEffect(()=>{console.log("hmm... this is interesting");},[])
    return <h2>hello there</h2>
};

export default CleanupFunction;
