import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import classes from "./map.module.css";

// Désactiver le rendu côté serveur (SSR) pour Leaflet
const MapContainerWithNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayerWithNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const MarkerWithNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const PopupWithNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const MyMap = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [center, setCenter] = useState([48.8566, 2.3522]); // Coordonnées par défaut (Paris)

  useEffect(() => {
    // On s'assure que le code n'est exécuté que côté client
    if (typeof window !== "undefined") {
      // Initialiser les icônes Leaflet seulement après le rendu côté client
      const L = require("leaflet");

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });

      setIsMounted(true); // On indique que le composant est monté côté client
    }
  }, []);

  if (!isMounted) {
    return <p>Loading...</p>; // On affiche quelque chose en attendant le rendu côté client
  }

  return (
    <MapContainerWithNoSSR
      key={center} // Ajout de la clé pour forcer le rechargement correct
      center={center}
      zoom={13}
      style={{ height: "70vh", width: "100%" }}
    >
      <TileLayerWithNoSSR
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerWithNoSSR position={center}>
        <PopupWithNoSSR className={classes.popup}>BPI</PopupWithNoSSR>
      </MarkerWithNoSSR>
    </MapContainerWithNoSSR>
  );
};

export default MyMap;
