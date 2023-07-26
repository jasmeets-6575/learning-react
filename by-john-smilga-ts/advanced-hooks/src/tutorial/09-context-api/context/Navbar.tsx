import React, { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

interface User {
  name: string;
}

interface NavbarContextValue {
  user: User | null;
  logout: () => void;
}

export const NavbarContext = createContext<NavbarContextValue>(
  {} as NavbarContextValue
);

// custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>({ name: "bob" });

  const logout = () => {
    setUser(null);
  };

  const contextValue: NavbarContextValue = { user, logout };

  return (
    <NavbarContext.Provider value={contextValue}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
