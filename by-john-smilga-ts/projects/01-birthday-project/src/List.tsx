import Person from "./Person";
import { People } from "./types";
import React from "react";
const List: React.FC = ({ people }: People) => {
  return (
    <section>
      {people.map((person: People) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
export default List;
