import { React, useState } from "react";
import data from "./data";
import List from "./List";

function App() {
<<<<<<< HEAD
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}> Clear All</button>
      </section>
    </main>
  );
=======
  const [people,setPeople] = useState(data);
  return <main>
    <section className='container'>
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button onClick={()=>setPeople([])}> Clear All</button>
    </section>
  </main>
>>>>>>> 90281ae82459e7d6db1017849b111352347965c3
}

export default App;
