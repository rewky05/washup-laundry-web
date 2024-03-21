import AboutBackground from "../assets/about-bg.png";
import AboutTeam from "../assets/about-team.jpeg";
// import AboutTeamOne from "../assets/about-team-one.jpg";
import AboutTeamTwo from "../assets/about-team-two.jpg";
import AboutTeamThree from "../assets/about-team-three.jpg";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const AboutUs = () => {
  const slides = [
    {
      url: AboutTeam,
    },
    // {
    //   url: AboutTeamOne,
    // },
    {
      url: AboutTeamTwo,
    },

    {
      url: AboutTeamThree,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

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
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 pb-12 pt-8 md:mt-[-40px] mt-[-30px]">
        {/* Carousel */}
        <div className="relative group">
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
            }}
            className="w-full h-[370px] bg-top bg-cover bg-no-repeat md:rounded-3xl rounded-[14rem] duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled color="white" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col h-auto xl:h-[395px] xxl:h-[370px] p-10 xl:p-8 xxl:p-10 md:text-xl border-2 border-white text-lg text-white bg-red rounded-3xl bg-opacity-[0.7]">
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
