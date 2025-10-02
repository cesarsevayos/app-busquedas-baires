import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo, useRef, useEffect } from "react";

type Props = {
  lat?: number;
  lon?: number;
  zoom?: number;
  title?: string;
  className?: string;
};

export default function StreetAreaMap({
  lat,
  lon,
  zoom = 15,
  title = "Ubicación",
  className = "w-full h-[420px]",
}: Props) {
  const hasCenter = Number.isFinite(lat) && Number.isFinite(lon);
  const center = useMemo<[number, number]>(
    () => (hasCenter ? [lat as number, lon as number] : [-34.6037, -58.3816]),
    [hasCenter, lat, lon]
  );

  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const invalidate = () => map.invalidateSize({ animate: false });
    const t = window.setTimeout(invalidate, 50);
    window.addEventListener("resize", invalidate);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", invalidate);
    };
  }, []);

  return (
    <div className={className}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom
        className="w-full h-full"
        key={`${center[0]}-${center[1]}`}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap &copy; CARTO"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
"
        />
        {hasCenter && (
          <Marker position={center}>
            <Popup>
              <strong>{title}</strong>
              <div>Lat: {center[0].toFixed(5)}</div>
              <div>Lon: {center[1].toFixed(5)}</div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
