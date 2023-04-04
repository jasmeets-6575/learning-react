import { createContext , useContext } from "react";

const AppContext = createContext();

const reducer = (state, action) => {
    return state;
}

export const AppProvider = ({ children }) => {
  
  const [] = useReducer() 
    
  return (
    <AppContext.Provider value={{}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
