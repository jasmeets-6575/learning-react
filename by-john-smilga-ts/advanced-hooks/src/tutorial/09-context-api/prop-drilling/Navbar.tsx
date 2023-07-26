import React, { useState } from "react";
import NavLinks from "./NavLinks";

interface User {
  name: string;
}

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>({ name: "bob" }); // Use the 'User' interface here
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};

export default Navbar;
