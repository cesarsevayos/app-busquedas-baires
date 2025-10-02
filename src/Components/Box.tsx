import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/context";

const Box = ({ imageUrl, title, description }: any) => {
  const { lugares, setPositionMap } = useAppContext();

  const navigate = useNavigate();
  const handleClick = async (lugar: any) => {

    const lugarEncontrado = lugares.find(
      (item: any) => item.nombre === lugar
    );

    setPositionMap({
      lat: lugarEncontrado.coordenadas.lat,
      lon: lugarEncontrado.coordenadas.lon,
      barrio: lugarEncontrado.nombre,
    });

    navigate("/page3");
  };

  return (
    <div
      className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden"
      onClick={() => handleClick(title)}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
      />
      <div className="flex flex-col justify-center p-4 text-center sm:text-left">
        <h3 className="font-roboto font-semibold text-lg">{title}</h3>
        <p className="font-roboto text-sm text-black">{description}</p>
      </div>
    </div>
  );
};

export default Box;
