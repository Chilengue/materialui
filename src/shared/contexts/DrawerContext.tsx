
import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface IDrawerContextData {
  isDrawerOpen:boolean;
  toggleDraerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};


export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDraerOpen = useCallback(() => {
    // armazena funcao  e execua funcoes
    setIsDrawerOpen((oldDrawerOpen) =>
      !oldDrawerOpen); // serve para fazer troca de valores dentor de react
  }, []);

  

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDraerOpen}}>
        {children}
    </DrawerContext.Provider>
  );
};
