import { useEffect, useRef } from "react";
import LocationsBackground from "../assets/location-bg.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIcon from "/public/images/marker-icon.png";
import markerShadow from "/public/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Locations = () => {
  const mapRef = useRef(null);

  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [26, 40],
    iconAnchor: [16, 40],
    shadowUrl: markerShadow,
    shadowSize: [45, 45],
    shadowAnchor: [16, 43],
  });

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([10.305101, 123.910843], 13);
    }
  }, []);

  return (
    <div
      name="locations"
      className="w-full h-screen bg-cover bg-top p-16 z-0 grid place-items-center"
      style={{
        backgroundImage: `url(${LocationsBackground})`,
      }}
    >
      <div className="mb-16 md:my-[68px] text-center">
        <h1 className="text-white">LOCATIONS</h1>
        <h2 className="text-[36px] text-white font-medium [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black">
          Where To Find Us
        </h2>
      </div>
      <div className="bg-white rounded-3xl mt-[-20px] xl:w-[960px] xs:w-[250px] sm:w-[450px] md:w-[650px] lg:w-[850px] h-[430px] p-4">
        <MapContainer
          className="z-0 outline-none h-[400px]"
          center={[10.305101, 123.910843]}
          zoom={13}
          // style={{ height: "30px" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[10.305101, 123.910843]} icon={customIcon}>
            <Popup>
              <span className="flex font-bold">
                Wash Up Laundry Galleria Branch
              </span>
              <span>
                Basement 2, Robinsons Galleria Cebu, Gen. Maxilom Avenue
                Extension, Sergio Osme&#241;a Jr. Blvd, Cebu City
              </span>
            </Popup>
          </Marker>
          <Marker position={[10.3089782, 123.8936896]} icon={customIcon}>
            <Popup>
              <span className="flex font-bold">
                Wash Up Laundry Fuente Branch
              </span>
              <span>
                Ground Floor, Robinsons Fuente Cebu, Osme&#241;a Blvd, Ramos,
                Cebu City
              </span>
            </Popup>
          </Marker>
          <Marker position={[10.3180371, 123.9049874]} icon={customIcon}>
            <Popup>
              <span className="flex font-bold">
                Wash Up Laundry Ayala Center Cebu Branch
              </span>
              <span>
                Basement 1, Services Lounge, Ayala Center Cebu, Cebu Business
                Park, Cebu City
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Locations;
