import Person from "./Person";
import { ListProps, People } from "./types";

const List = ({ people }: ListProps) => {
  return (
    <section>
      {people.map((person: People) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
export default List;
