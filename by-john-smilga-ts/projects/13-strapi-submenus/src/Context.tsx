import { createContext, useState, useContext, ReactNode } from "react";

// Define the types for the context and state values
type ContextType = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  pageId: string | null; // Replace 'number' with the appropriate type for your 'pageId'
  setPageId: (id: string | null) => void; // Replace 'number' with the appropriate type for your 'pageId'
};

const AppContext = createContext<ContextType>({
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  pageId: null,
  setPageId: () => {},
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState<string | null>(null); // Replace 'number' with the appropriate type for your 'pageId'

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
