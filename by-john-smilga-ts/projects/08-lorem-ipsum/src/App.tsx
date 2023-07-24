import React, { useState, FormEvent } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let amount = parseInt(count.toString(), 10);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10))}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
