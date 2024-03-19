import { FaCheckCircle } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import ServicesBackground from "../assets/services-bg.png";

const Services = () => {
  return (
    <div
      name="services"
      className="w-full bg-cover bg-center p-16 z-0"
      style={{
        backgroundImage: `url(${ServicesBackground})`,
      }}
    >
      <div className="my-12 md:my-[68px] text-center">
        <h1 className="text-white">SERVICES</h1>
        <h2 className="text-[36px] text-white font-medium [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black">
          Services & Packages
        </h2>
      </div>
      <div className="max-w-[1040px] m-auto grid md:grid-cols-3 gap-8">
        <div className="group bg-white w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300 hover:bg-red">
          <MdLocalLaundryService className="text-red text-5xl mx-auto mt-[-2rem] group-hover:text-white" />
          <h1 className="text-2xl font-bold text-center py-6 text-red group-hover:text-white">
            SELF-SERVICE
          </h1>
          <p className="mx-8 text-xl opacity-[0.5] group-hover:text-yellow group-hover:opacity-[1]">
            What&apos;s included:
          </p>
          <div className="font-medium">
            <div className="flex items-center py-2 mx-8 mt-4 group-hover:text-white">
              <FaCheckCircle />
              <p className="ml-3 group-hover:text-white">Wash</p>
            </div>
            <div className="flex items-center py-2 mx-8 group-hover:text-white">
              <FaCheckCircle />
              <p className="ml-3 group-hover:text-white">Dry</p>
            </div>
            <div className="flex items-center py-2 mx-8 group-hover:text-white">
              <FaCheckCircle />
              <p className="ml-3 group-hover:text-white">Fold</p>
            </div>
          </div>
        </div>
        <div className="group bg-white opacity-[0.9] w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 hover:bg-red">
          <MdLocalLaundryService className="text-red text-5xl mx-auto mt-[-2rem] group-hover:text-white" />
          <h1 className="text-2xl text-red font-bold text-center py-6 group-hover:text-white">
            REGULAR SERVICES
          </h1>
          <p className="mx-8 text-xl text-black opacity-[0.5] group-hover:text-yellow group-hover:opacity-[1]">
            What&apos;s included:
          </p>
          <div className="font-medium">
            <div className="flex items-center py-2 mx-8 mt-4">
              <FaCheckCircle className="group-hover:text-white" />
              <p className="ml-3 group-hover:text-white">Wash-dry-fold</p>
            </div>
            <div className="flex items-center py-2 mx-8">
              <FaCheckCircle className="group-hover:text-white" />
              <p className="ml-3 group-hover:text-white">Wash-dry-press</p>
            </div>
            <div className="flex items-center py-2 mx-8">
              <FaCheckCircle className="group-hover:text-white" />
              <p className="ml-3 group-hover:text-white">
                Wash-dry-fold Express (4hrs)
              </p>
            </div>
            <div className="flex items-center py-2 mx-8">
              <FaCheckCircle className="group-hover:text-white" />
              <p className="ml-3 group-hover:text-white">Handwash-dry-fold</p>
            </div>
            <div className="flex items-center py-2 mx-8">
              <FaCheckCircle className="group-hover:text-white" />
              <p className="ml-3 group-hover:text-white">Handwash-dry-press</p>
            </div>
            <div className="flex items-center py-2 mx-8">
              <FaCheckCircle className="group-hover:text-white" />
              <p className="ml-3 group-hover:text-white">Press</p>
            </div>
          </div>
        </div>
        <div className="group bg-white w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300 hover:bg-red">
          <MdLocalLaundryService className="text-red text-5xl mx-auto mt-[-2rem] group-hover:text-white" />
          <h1 className="text-2xl font-bold text-center py-6 text-red group-hover:text-white">
            DRY CLEAN SERVICES
          </h1>
          <p className="mx-8 text-xl opacity-[0.5] group-hover:text-yellow group-hover:opacity-[1]">
            What&apos;s included:
          </p>
          <div className="flex items-center py-2 mx-8 mt-4 font-medium">
            <FaCheckCircle className="group-hover:text-white" />
            <p className="ml-3 group-hover:text-white">
              Items are subject for checking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
