import {
  getBarriosDestacados,
  getLugaresPorBarrio,
  getAllBarrios,
} from "../app/services/barrios.services";

const useBarrios = () => {
  const getAll = async (): Promise<any> => {
    try {
      const data = await getAllBarrios();
      return data;
    } catch (error) {
      console.error("Error fetching all barrios data:", error);
      return null;
    }
  };

  const getDestacados = async (): Promise<any> => {
    try {
      const data = await getBarriosDestacados();
      return data;
    } catch (error) {
      console.error("Error fetching destacados barrios data:", error);
      return null;
    }
  };

  const getLugares = async (value: string): Promise<any> => {
    console.log("Fetching lugares for:", value);
    try {
      const data = await getLugaresPorBarrio(value);
      return data;
    } catch (error) {
      console.error("Error fetching lugares por barrio data:", error);
      return null;
    }
  };

  return { getAll, getDestacados, getLugares };
};

export default useBarrios;
