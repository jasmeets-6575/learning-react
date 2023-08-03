import React, { ReactElement, useContext, useEffect, useState } from "react";

const UserContext = React.createContext({});

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const AppProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <UserContext.Provider value="user context">{children}</UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
