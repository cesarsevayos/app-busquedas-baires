import { useState } from "react";
import { useAppContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import useMap from "../hooks/useMap";
import useBarrios from "../hooks/useBarrios";

const HeroSearch = () => {
  const navigate = useNavigate();
  const { positionMap, setPositionMap, setLugares } = useAppContext();
  const { getPositionMap } = useMap();
  const { getLugares } = useBarrios();
  const [query, setQuery] = useState("");

  const searchDirection = async (value: string) => {
    const resp = await getPositionMap(value);
    if (resp) {
      await getLugares(resp.barrio);
      const dataLugares = await getLugares(resp.barrio);
      setLugares(dataLugares.lugares);
      setPositionMap(resp);
      navigate("/page2");
    } else {
      console.error("No data found for the given location");
    }
  };

  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center flex flex-col items-center justify-center font-roboto "
      style={{ backgroundImage: 'url("src/assets/images/image1.png")' }}
    >
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      <div className="text-center mb-6 text-white">
        <h1 className="text-3xl md:text-4xl mb-1">
          Descubrí los barrios de Buenos Aires
        </h1>
        <p className="text-sm md:text-base">
          Comentarios reales, datos útiles y todo lo que necesitás saber
        </p>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="🔍 Buscar por barrio"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchDirection(query);
            }
          }}
          className="w-80 md:w-[600px] px-4 py-2 rounded-lg text-black"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroSearch;
