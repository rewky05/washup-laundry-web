// import { ReactTyped } from "../../node_modules/.vite/deps/react-typed";
// import HeroBackground from "../assets/hero-bg-web.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full bg-cover bg-center p-16 z-0 xs:bg-[url('assets/hero-bg.png')] sm:bg-[url('assets/hero-bg.png')] 
      md:bg-[url('assets/hero-bg.png')] lg:bg-[url('assets/hero-bg-web.png')]"
      // style={{
      //   backgroundImage: `url(${HeroBackground})`,
      // }}
    >
      <div className="max-w-[1240px] grid lg:grid-cols-2 lg:items-start lg:ml-10 xs:flex xs:flex-col xs:items-center">
        <div className="grid h-screen place-items-center">
          <h1 className="md:text-5xl sm:text-4xl xs:text-2xl text-3xl text-red bg-white p-4 py-3 rounded-md border-2 lg:bg-none lg:border-none border-red font-light">
            <div>Laundry today or</div>
            <div>Naked tomorrow.</div>
          </h1>
        </div>
        <div>
          <img
            className="w-[550px] my-8 opacity-0"
            src={"./src/assets/hero2.png"}
            alt="laundry"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
