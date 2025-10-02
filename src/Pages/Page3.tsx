import MainLayout from "../layouts/MainLayout";
import CommentSection from "../components/CommentSection";
import { ImageBarrios } from "../components/MapBarrios";
import Map2 from "../components/Map2";
import { useAppContext } from "../context/context";
const Page3 = () => {
  const { positionMap } = useAppContext();

  return (
    <MainLayout>
      <div className="flex flex-col h-screen">
        {/* Mitad superior: mapas con espacio */}
        <div className="hidden lg:flex p-6 h-1/2 w-full">
          {/* Mapa izquierdo - 15% fijo */}
          <div className="flex items-center justify-center w-[20%] bg-gray-100 rounded-2xl shadow-md p-4">
            <div className="max-w-[300px] max-h-[350px] w-full h-auto">
              <ImageBarrios />
            </div>
          </div>

          {/* Espacio - 5% */}
          <div className="w-[10%]" />

          {/* Mapa derecho - ocupa el resto */}
          <div className="flex-1 min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
            <Map2 lat={positionMap.lat} lon={positionMap.lon} />
          </div>
        </div>

        {/* Responsive para pantallas chicas (stackeado) */}
        <div className="flex flex-col lg:hidden gap-6 p-6 h-1/2">
          <div className="min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
            <Map2 />
          </div>
          <div className="min-h-[250px] bg-gray-100 rounded-2xl shadow-md flex items-center justify-center p-4">
            <ImageBarrios />
          </div>
        </div>

        {/* Mitad inferior: comentarios */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 bg-gray-50 rounded-t-3xl border-t shadow-inner">
          <CommentSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page3;
