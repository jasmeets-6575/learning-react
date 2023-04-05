<<<<<<< HEAD
import { useReducer, createContext, useContext } from "react";
import reducer from "./reducer";
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>;
=======
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
>>>>>>> 5930027eee88e77409b3df7d0c50c64995afa091
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
