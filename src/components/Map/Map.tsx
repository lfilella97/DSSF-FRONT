import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Structures } from "../../types";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [28, 46],
  iconAnchor: [17, 46],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  structures: Structures;
}

const Map = ({ structures }: MapProps): JSX.Element => {
  let position = { lat: 42.35694, lng: 0.66639 };
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100%", height: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {structures.map(({ coordenateX, coordenateY, name, id }) => (
        <Marker
          key={id}
          position={{
            lng: +coordenateX ? +coordenateX : 0,
            lat: +coordenateY ? +coordenateY : 0,
          }}
        >
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
