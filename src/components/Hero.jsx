// import { ReactTyped } from "../../node_modules/.vite/deps/react-typed";
// import HeroBackground from "../assets/hero-bg-web.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full bg-cover bg-center p-16 z-0 xs:bg-[url('assets/hero-bg.png')] sm:bg-[url('assets/hero-bg.png')] 
      md:bg-[url('assets/hero-bg.png')] lg:bg-[url('assets/hero-bg.png')] xl:bg-[url('assets/hero-bg-web.png')]"
      // style={{
      //   backgroundImage: `url(${HeroBackground})`,
      // }}
    >
      <div className="max-w-[1240px] grid lg:grid-cols-2 lg:items-start lg:ml-10 xs:flex xs:flex-col xs:items-center">
        <div className="grid h-screen place-items-center">
          <h1 className="md:text-7xl text-4xl text-white font-bold p-4 py-3 rounded-md">
            <div className="mb-4">Laundry today</div>
            <div>Worry free tomorrow.</div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
