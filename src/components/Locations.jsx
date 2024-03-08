import { useEffect, useRef } from "react";
import LocationsBackground from "../assets/location-bg.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Locations = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([10.305101, 123.910843], 13);
    }
  }, []);

  return (
    <div
      name="locations"
      className="w-full bg-cover bg-top p-16 z-0 grid place-items-center"
      style={{
        backgroundImage: `url(${LocationsBackground})`,
      }}
    >
      <div className="my-12 md:my-[68px] text-center">
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
          <Marker position={[10.305101, 123.910843]}>
            <Popup>Wash Up Laundry Fuente Branch</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Locations;
