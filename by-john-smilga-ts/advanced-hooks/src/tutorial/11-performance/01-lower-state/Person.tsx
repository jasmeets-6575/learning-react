const Person = ({ name }: { name: String }) => {
  console.log("render");

  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;
