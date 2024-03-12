import { Link } from "react-scroll";
import Logo from "../assets/washup-logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-red text-white py-8 px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      <div className="flex items-center justify-center">
        <img src={Logo} width={300} />
      </div>
      <div className="xl:col-span-2 lg:col-span-1 md:col-span-1 col-span-1 flex justify-evenly">
        <div className="lg:mx-10 md:mx-8 md:pl-[20rem] mx-3">
          <h6 className="font-medium text-gray-400 pl-4">About Us</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:mx-10 md:mx-8 sm:mx-4 mx-3">
          <h6 className="font-medium text-gray-400 pl-4">Company</h6>
          <ul>
            <li className="py-2 text-sm">Our Team</li>
            <li className="py-2 text-sm">Terms</li>
            <li className="py-2 text-sm">Guidelines</li>
            <li className="py-2 text-sm">Blog</li>
          </ul>
        </div>
        <div className="lg:mx-10 md:mx-8 sm:mx-4 mx-3">
          <h6 className="font-medium text-gray-400 pl-4">Services</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link to="services" smooth={true} duration={500}>
                Dry Clean
              </Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="services" smooth={true} duration={500}>
                Regular Services
              </Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="services" smooth={true} duration={500}>
                Self-Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
