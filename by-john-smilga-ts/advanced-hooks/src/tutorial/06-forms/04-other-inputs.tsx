import React, { useState, ChangeEvent } from "react";

const frameworks: string[] = ["react", "angular", "vue", "svelte"];

const OtherInputs: React.FC = () => {
  const [shipping, setShipping] = useState<boolean>(false);
  const [framework, setFramework] = useState<string>("react");

  const handleShipping = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e: ChangeEvent<HTMLSelectElement>) => {
    setFramework(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <input
            type="checkbox"
            checked={shipping}
            id="shipping"
            name="shipping"
            onChange={handleShipping}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default OtherInputs;
