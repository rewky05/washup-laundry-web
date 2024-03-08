import AboutBackground from "../assets/about-bg.png";
import AboutTeam from "../assets/about-team.jpeg";

const AboutUs = () => {
  return (
    <div
      name="about"
      className="w-full bg-cover bg-center p-16 z-0"
      style={{
        backgroundImage: `url(${AboutBackground})`,
      }}
    >
      <div className="my-12 md:my-[68px] text-center">
        <h1 className="text-white">ABOUT US</h1>
        <h2 className="text-[36px] text-white font-medium [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black">
          Who We Are
        </h2>
      </div>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 pb-12 pt-8 items-center md:mt-[-40px] mt-[-30px]">
        <div
          className="bg-cover bg-no-repeat bg-center border-4 border-white w-full h-[405px] md:rounded-3xl rounded-[14rem]"
          style={{
            backgroundImage: `url(${AboutTeam})`,
          }}
        ></div>
        <div className="flex flex-col md:text-2xl text-lg text-white px-8 py-4 bg-red rounded-3xl bg-opacity-[0.6]">
          <p className="mb-6">
            We are Grecogel Corporation, operating under the name Washup
            Laundry. Established in 2016, we&apos;ve become a big name in the
            laundry business with over 10 branches spread across Cebu City,
            Mandaue City, Consolacion, and Lapu Lapu City.
          </p>
          <p>
            Our mission is to deliver top-notch laundry services, ensuring the
            highest quality care for all types of garments. With a commitment to
            excellence, Washup Laundry stands as a reliable choice for
            individuals seeking impeccable laundry solutions across various
            locations in the Philippines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
