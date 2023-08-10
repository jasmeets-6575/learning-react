import axios from "axios";
import React, { useContext, ReactElement } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

type IAppState = {};
const AppContext = React.createContext<IAppState>({} as IAppState);

type ChildrenType = { children?: ReactElement | ReactElement[] };
const AppProvider = ({ children }: ChildrenType): ReactElement => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
