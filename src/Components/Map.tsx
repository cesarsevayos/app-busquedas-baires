import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useAppContext } from "../context/context";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const { positionMap } = useAppContext();
  console.log("Map position:", positionMap);
  return (
    <div className="w-full h-full">
      <MapContainer
        //center={[-34.6037, -58.3816]}
        center={[positionMap.lat, positionMap.lon]}
        zoom={16}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[positionMap.lat, positionMap.lon]}>
          <Popup>Buenos Aires</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
