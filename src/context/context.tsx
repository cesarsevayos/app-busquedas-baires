import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import useBarrios from "../hooks/useBarrios";

const AppContext = createContext<any>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  //Hooks
  const { getAll, getDestacados } = useBarrios();

  //Estados
  const [positionMap, setPositionMap] = useState<Record<string, unknown>>({});
  const [openLogin, setOpenLogin] = useState(false);
  const [direction, setDirection] = useState<Record<string, unknown>>({});
  const [barriosDestacados, setBarriosDestacados] = useState<any[]>([]);
  const [barrios, setBarrios] = useState<any[]>([]);
  const [lugares, setLugares] = useState<any[]>([]);0
  const [barrioSelected, setBarrioSelected] = useState<any[]>([]);0

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data for barrios and destacados");
      console.log("getAll:", await getAll());
      console.log("getDestacados:", await getDestacados());
      setBarrios(await getAll());
      setBarriosDestacados(await getDestacados());
    };
    fetchData();
  }, [getAll, getDestacados]);

  return (
    <AppContext.Provider
      value={{
        positionMap,
        setPositionMap,
        openLogin,
        setOpenLogin,
        direction,
        setDirection,
        barrios,
        setBarrios,
        barriosDestacados,
        setBarriosDestacados,
        lugares,
        setLugares,
        barrioSelected,
        setBarrioSelected,
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
