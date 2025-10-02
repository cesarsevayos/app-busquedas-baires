import { barriosBuenosAires } from "../../mocks/barrios_buenos_aires";
import { barriosDestacados } from "../../mocks/barrios_destacados";
import { lugaresPorBarrios } from "../../mocks/lugares_por_barrios";

export const getBarriosDestacados = async () => {
  return barriosDestacados.data;
};

export const getAllBarrios = async () => {
  return barriosBuenosAires.data || [];
};

export const getLugaresPorBarrio = async (barrio: string) => {
  return (
    lugaresPorBarrios.data.find(
      (lugar) => lugar.barrio.toLowerCase() === barrio.toLowerCase()
    )
  );
};
