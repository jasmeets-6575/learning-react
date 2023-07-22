import { useState } from "react";
import { data } from "./data";
import List from "./List";
import { People } from "./types";

const App = () => {
  const [people, setPeople] = useState<People[]>(data);
  return (
    <main className="container">
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
