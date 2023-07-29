import Item from "./Person";
import { memo } from "react";

interface Person {
  id: number;
  name: string;
}

interface ListProps {
  people: Person[];
  removePerson: (id: number) => void;
}

const List = ({ people, removePerson }: ListProps) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};
export default memo(List);
