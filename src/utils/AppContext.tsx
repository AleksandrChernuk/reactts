import { FC, ReactNode, createContext, useContext, useState } from "react";

interface IAppContextProps {
  children: ReactNode;
}

interface IcreateContext {
  isOpen: boolean;
  toggleModal: () => void;
}

const AppContext = createContext<IcreateContext | undefined>(undefined);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: FC<IAppContextProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return <AppContext.Provider value={{ toggleModal, isOpen }}>{children}</AppContext.Provider>;
};
