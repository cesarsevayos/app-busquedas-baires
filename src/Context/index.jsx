import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  //Map
  // const [positionMap, setPositionMap] =
  //   useState < [Number, Number] > [-34.6037, -58.3816]; // Buenos Aires default
  const [positionMap, setPositionMap] = useState({});
  const [openLogin, setOpenLogin] = useState(false);
  const [direction, setDirection] = useState({});

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

export const useAppContext = () => useContext(AppContext);
