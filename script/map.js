import "leaflet";
import "leaflet/dist/leaflet.css";
import pinMarker from "../imgs/map-marker.png";

export const map = () => {

  const map = L.map("map", {
    dragging: false,
  }).setView([51.50073355020347, -0.12462496081611447], 17);


  
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([51.50073355020347, -0.12462496081611447], {
    icon: L.icon({
      iconUrl: pinMarker,
      iconSize: [34, 34],
      iconAnchor: [24, 15],
      popupAnchor: [-7, -5],
    }),
  }).addTo(map)
    .bindPopup(L.popup({
      className: "custome-popup",
      minWidth: 100
    })).setPopupContent("WE ARE HERE")
    .openPopup();
    
}
