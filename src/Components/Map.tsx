// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export const Map = () => {
//   return (
//     <div style={{ display: "flex", flexDirection: "row", height: "80vh" }}>
//       <main style={{ flex: "1 ", height: "100%" }}>
//         <MapContainer
//           center={[-34.6037, -58.3816]}
//           zoom={13}
//           style={{ height: "100%", width: "100%" }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           <Marker position={[-34.6037, -58.3816]}>
//             <Popup>Buenos Aires</Popup>
//           </Marker>
//         </MapContainer>
//       </main>
//     </div>
//   );
// };

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export const Map = () => {
//   return (
//     <div className="w-full h-full">
//       <MapContainer
//         center={[-34.6037, -58.3816]}
//         zoom={13}
//         className="w-full h-full"
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker position={[-34.6037, -58.3816]}>
//           <Popup>Buenos Aires</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export const Map = () => {
//   return (
//     <div className="w-full h-full">
//       <MapContainer
//         center={[-34.6037, -58.3816]}
//         zoom={13}
//         className="w-full h-full"
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker position={[-34.6037, -58.3816]}>
//           <Popup>Buenos Aires</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useAppContext } from "../Context";
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
