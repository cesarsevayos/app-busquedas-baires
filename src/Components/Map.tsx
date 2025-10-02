import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Tooltip,
  FeatureGroup,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAppContext } from "../context/context";
import "leaflet/dist/leaflet.css";

// 🎨 Paleta fija de colores fuertes
const PALETTE = [
  "#2563EB",
  "#16A34A",
  "#DC2626",
  "#D97706",
  "#7C3AED",
  "#E11D48",
  "#0D9488",
  "#CA8A04",
];

// 📍 Función para calcular bounds
const getBounds = (lugares: any[]) => {
  if (!lugares?.length) return null;
  const b = L.latLngBounds([]);
  lugares.forEach((lugar) => {
    b.extend([lugar.coordenadas.lat, lugar.coordenadas.lon]);
  });
  return b.pad(0.2);
};

export const Map = () => {
  const { positionMap, lugares } = useAppContext();
  const [showRadios, setShowRadios] = useState(true);
  const mapRef = useRef<L.Map | null>(null);

  const center: [number, number] = [positionMap.lat, positionMap.lon];
  const DEFAULT_RADIO = 500;

  // 🎨 Asignar colores según la cantidad de lugares
  const colors = useMemo(() => {
    return lugares.map((_, idx) => PALETTE[idx % PALETTE.length]);
  }, [lugares]);

  // 📍 Bounds dinámicos
  const bounds = useMemo(() => getBounds(lugares), [lugares]);

  useEffect(() => {
    if (mapRef.current && bounds) {
      mapRef.current.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [bounds]);

  return (
    <div className="w-full h-full relative">
      {/* Toggle radios */}
      <button
        onClick={() => setShowRadios(!showRadios)}
        className="absolute top-2 right-2 z-[1000] bg-white border px-3 py-1 rounded shadow hover:bg-gray-100"
      >
        {showRadios ? "Ocultar radios" : "Mostrar radios"}
      </button>

      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom
        className="w-full h-full z-0"
        whenCreated={(map) => (mapRef.current = map)}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <FeatureGroup>
          {lugares.map((lugar, idx) => {
            const pos: [number, number] = [
              lugar.coordenadas.lat,
              lugar.coordenadas.lon,
            ];
            const radio = lugar.radioMetros ?? DEFAULT_RADIO;
            const color = colors[idx]; // color fijo

            return (
              <div key={lugar.nombre}>
                {/* Círculo de radio */}
                {showRadios && (
                  <Circle
                    center={pos}
                    radius={radio}
                    pathOptions={{
                      color,
                      opacity: 0.9,
                      weight: 2,
                      fillColor: color,
                      fillOpacity: 0.2,
                    }}
                  >
                    <Tooltip direction="top" offset={[0, -8]} permanent>
                      <span>{lugar.nombre}</span>
                    </Tooltip>
                  </Circle>
                )}

                {/* Marker del mismo color */}
                <Marker
                  position={pos}
                  icon={L.divIcon({
                    className: "custom-marker",
                    html: `<div style="background:${color}; width:16px; height:16px; border-radius:50%; border:2px solid white;"></div>`,
                  })}
                >
                  <Popup>
                    <strong>{lugar.nombre}</strong>
                    <br />
                    {lugar.detalle}
                  </Popup>
                </Marker>
              </div>
            );
          })}
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};
