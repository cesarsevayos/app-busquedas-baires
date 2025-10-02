import { useAppContext } from "../context/context";
import useBarrios from "../hooks/useBarrios";
import { useNavigate } from "react-router-dom";

const NeighborhoodCards = () => {
  const { barriosDestacados, setLugares, setPositionMap, setBarrioSelected } = useAppContext();
  const { getLugares } = useBarrios();
  const navigate = useNavigate();

  const handleBarrioClick = async (barrio: any) => {
    const dataLugares = await getLugares(barrio.nombre);
    console.log("barrioooo:", dataLugares);
    setLugares(dataLugares.lugares);
    setBarrioSelected(barrio);
    console.log("barrioooo:", barrio.nombre);

    setPositionMap({ lat: barrio.coordenadas.lat, lon: barrio.coordenadas.lon, barrio: barrio.nombre });
    navigate("/page2");
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-roboto font-semibold mb-4">
        Barrios destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {barriosDestacados.map((barrio: any, index: any) => (
          <div
            key={index}
            className="rounded-lg shadow overflow-hidden cursor-pointer"
            onClick={() => handleBarrioClick(barrio)}
          >
            <img
              src={barrio.image}
              alt={barrio.nombre}
              className="w-full h-max object-cover aspect-video"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-roboto font-bold">{barrio.nombre}</h3>
                <span className="text-yellow-400">
                  {"★".repeat(barrio.rating)}
                </span>
              </div>
              <p className="text-sm text-black font-roboto">
                {barrio.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeighborhoodCards;
