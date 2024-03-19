import { useState } from "react";
import { Link } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/washup-logo.png";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="z-10 fixed top-0 w-full h-[80px] flex justify-between items-center xs:px-10 sm:px-16 bg-red font-inter text-white select-none">
      <div className="flex justify-center items-center text-red">
        <div>
          <img src={Logo} className="md:w-40 min-[280px]:w-[140px] w-[160px]" />
        </div>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex md:text-lg">
        <li className="after:content-[''] after:absolute after:w-[47px] after:h-[3px] after:bg-yellow after:rounded after:right-[512px] after:bottom-6 after:scale-x-0 after:transition-transform duration-900 after:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-yellow">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="after:content-[''] after:absolute after:w-[64px] after:h-[3px] after:bg-yellow after:rounded after:right-[415px] after:bottom-6 after:scale-x-0 after:transition-transform duration-900 after:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-yellow">
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="after:content-[''] after:absolute after:w-[73px] after:h-[3px] after:bg-yellow after:rounded after:right-[309px] after:bottom-6 after:scale-x-0 after:transition-transform duration-900 after:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-yellow">
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className="after:content-[''] after:absolute after:w-[77px] after:h-[3px] after:bg-yellow after:rounded after:right-[200px] after:bottom-6 after:scale-x-0 after:transition-transform duration-900 after:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-yellow">
          <Link to="locations" smooth={true} duration={500}>
            Locations
          </Link>
        </li>
        <li className="after:content-[''] after:absolute after:w-[88px] after:h-[3px] after:bg-yellow after:rounded after:right-[79px] after:bottom-6 after:scale-x-0 after:transition-transform duration-900 after:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-yellow">
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-0 left-0 w-[250px] h-screen bg-red text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${
          nav ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 mt-[18px] ml-[-10px]">
          <img src={Logo} className="w-[180px]" />
        </div>
        <li className="py-6 text-xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link
            onClick={handleClick}
            to="services"
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link
            onClick={handleClick}
            to="locations"
            smooth={true}
            duration={500}
          >
            Locations
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
