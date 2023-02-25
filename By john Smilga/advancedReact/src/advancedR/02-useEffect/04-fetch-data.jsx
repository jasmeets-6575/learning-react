import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch(url);
        const users = await response.json();
       console.log(users);
      
    } catch (error) {
      console.log(error);
    }
  }
    fetchData();
  }, []);

  return (
    <div>
      <h2>fetch data</h2>
    </div>
  );
};

export default FetchData;
