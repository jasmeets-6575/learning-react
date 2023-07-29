interface PersonProps {
  id: number;
  name: string;
  removePerson: (id: number) => void;
}

const Person = ({ name, id, removePerson }: PersonProps) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default Person;
