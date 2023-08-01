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

const AppContext = createContext<AppContextType>({} as AppContextType);

const getInitialDarkMode = (): boolean => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || prefersDarkMode;
};
type ChildrenType = { children?: ReactElement | ReactElement[] };

export const AppProvider = ({ children }: ChildrenType): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState<string>("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", String(newDarkTheme));
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

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

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};
