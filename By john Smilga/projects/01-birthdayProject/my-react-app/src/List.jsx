import data from "./data";

const List = () => {
  {
    data.map((person) => {
      const { id, name, age, img } = person;

      return (
        <article key={id}>
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h3>{age}</h3>
        </article>
      );
    });
  }
};

export default List;
