import { ReactElement, createContext, useContext, useState } from "react";

interface AppContextValue {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  openSidebar: () => void;
  closeModal: () => void;
  closeSidebar: () => void;
}

const AppContext = createContext<AppContextValue>({} as AppContextValue);

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const AppProvider = ({ children }: ChildrenType): ReactElement => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const AppContextValue = {
    isSidebarOpen,
    isModalOpen,
    openModal,
    openSidebar,
    closeModal,
    closeSidebar,
  };
  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextValue => {
  return useContext(AppContext);
};
