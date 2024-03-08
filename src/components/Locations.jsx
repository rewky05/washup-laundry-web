import LocationsBackground from "../assets/location-bg.png";

const Locations = () => {
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
      <div className="bg-white xl:w-[1060px] xs:w-[250px] sm:w-[450px] md:w-[650px] lg:w-[950px] h-[480px] rounded-3xl mt-[-20px] grid lg:grid-rows-2">
        <ul className="grid grid-cols-3 text-center">
          <li className="p-4 m-4">
            <p>Branch 1</p>
            <p>Hours:</p>
          </li>
          <li className="p-4 m-4">
            <p>Branch 2</p>
            <p>Hours:</p>
          </li>
          <li className="p-4 m-4">
            <p>Branch 3</p>
            <p>Hours:</p>
          </li>
        </ul>
        <div className="p-4 mx-auto">Maps</div>
      </div>
    </div>
  );
};

export default Locations;
