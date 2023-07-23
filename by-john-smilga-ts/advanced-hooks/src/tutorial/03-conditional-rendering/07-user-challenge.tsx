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

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
