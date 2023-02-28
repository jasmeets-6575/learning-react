import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [users, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <section>
      <h3>Fetch Data</h3>
      {users.map((user) => {
        const { id, avatar_url, name, bio, company } = user;
        return (
          <article key={id}>
            <img src={avatar_url} alt={name} />
            <h2>{name}</h2>
            <h3>Works at {company}</h3>
            <p>{bio}</p>
          </article>
        );
      })}
    </section>
  );
};

export default MultipleReturnsFetchData;
