import {
  createContext,
  useState,
  useContext,
  ReactElement,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextValueType {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  pageId: number | null;
  setPageId: Dispatch<SetStateAction<null>>;
}
const AppContext = createContext<AppContextValueType>(
  {} as AppContextValueType
);

type ChildrenProps = { children?: ReactElement | ReactElement[] };
export const AppProvider = ({ children }: ChildrenProps): ReactElement => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const AppContextValue: AppContextValueType = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    pageId,
    setPageId,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextValueType => {
  return useContext(AppContext);
};
