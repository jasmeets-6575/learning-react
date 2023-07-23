import { useState } from "react";

interface User {
  name: string;
}

const UserChallenge: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    // normally connect to db or api
    setUser({ name: "vegan food truck" });
  };

  const logout = () => {
    setUser(null);
  };

  return <div>hello world</div>;
};

export default UserChallenge;
