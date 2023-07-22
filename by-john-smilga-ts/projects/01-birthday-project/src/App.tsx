import { useState } from "react";
import { data } from "./data";
import List from "./List";
import { People } from "./types";
function App() {
  const [people, setPeople] = useState<People[]>(data);
  return (
    <main className="container">
      <h3>{people.length ? people.length : 0} birthdays today</h3>
      <List people={people} />
    </main>
  );
}

export default App;
