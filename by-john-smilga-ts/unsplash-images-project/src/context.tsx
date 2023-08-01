import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
} from "react";

type AppContextType = {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const AppProvider = ({ children }: ChildrenType): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("cat");

  const toggleDarkTheme = () => {};

  const contextValue: AppContextType = {
    isDarkTheme,
    toggleDarkTheme,
    searchTerm,
    setSearchTerm,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
