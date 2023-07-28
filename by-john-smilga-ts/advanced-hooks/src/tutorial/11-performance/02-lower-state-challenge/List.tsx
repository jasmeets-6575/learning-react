import Person from "./Person";
interface Person {
  id: number;
  name: string;
}
interface ListProps {
  people: Person[];
}
const List = ({ people }: ListProps) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
