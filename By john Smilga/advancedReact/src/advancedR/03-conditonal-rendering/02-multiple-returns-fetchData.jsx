import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUser(users);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>there is an error...</h2>;
  }
  
  const {id,name,company,bio,avatar_url}= users
  return (
    <article key={id}>
      <img src={avatar_url} alt={name} style={{ width: "150px" , borderRadius:"20px"}} />
      <h2>{name}</h2>
      <h3>Works at {company}</h3>
      <p>{bio}</p>
    </article>
  );
};

export default MultipleReturnsFetchData;
