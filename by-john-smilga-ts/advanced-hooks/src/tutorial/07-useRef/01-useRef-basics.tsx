import React, { useEffect, useRef, useState } from "react";

const UseRefBasics: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const refContainer = useRef<HTMLInputElement | null>(null);
  const isMounted = useRef<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(refContainer.current);
    const name = refContainer.current?.value;
    console.log(name);
  };

  useEffect(() => {
    // console.log(refContainer.current);
    refContainer.current?.focus();
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-render");
  }, [value]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
