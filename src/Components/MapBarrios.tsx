import { useAppContext } from "../context/context";
import cabaImg from "../assets/images/barrios/caba.png";

export const ImageBarrios = () => {
  const { lugares } = useAppContext();

  return (
    <div className="relative w-full h-full">
      {/* Imagen del mapa */}
      <img
        src={cabaImg}
        alt="Mapa barrios CABA"
        className="w-full h-full object-contain"
      />

      {/* Lugares: dibujados como puntos encima de la imagen */}
      {lugares.map((lugar: any, idx: number) => (
        <div
          key={idx}
          className="absolute flex items-center justify-center w-4 h-4 bg-red-600 rounded-full cursor-pointer"
          style={{
            top: `${lugar.coordenadas.y}%`,  // coordenadas relativas en porcentaje
            left: `${lugar.coordenadas.x}%`,
            transform: "translate(-50%, -50%)",
          }}
          title={lugar.nombre}
        />
      ))}
    </div>
  );
};