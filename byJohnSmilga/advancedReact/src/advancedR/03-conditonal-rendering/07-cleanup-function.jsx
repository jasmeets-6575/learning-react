import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log("hmm... this is interesting");
    // const intId = setInterval(() => {
    //   console.log("hello from interval");
    // }, 1000);
    // return () => {
    //     clearInterval(intId);
    // }
    const someFunc = () => {
        //some logic
    }
    window.addEventListener("scroll",someFunc)
    return window.removeEventListener("scroll",someFunc)
  }, []);
  return <h2>hello there</h2>;
};

export default CleanupFunction;
