import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

const AppContext = createContext<any>(undefined);

// Provider tipado
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [positionMap, setPositionMap] = useState<Record<string, unknown>>({});
  const [openLogin, setOpenLogin] = useState(false);
  const [direction, setDirection] = useState<Record<string, unknown>>({});

  return (
    <AppContext.Provider
      value={{
        positionMap,
        setPositionMap,
        openLogin,
        setOpenLogin,
        direction,
        setDirection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook para consumir el contexto, con chequeo de existencia
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
