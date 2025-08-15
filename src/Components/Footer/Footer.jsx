import Logo from "../../assets/logo-BfNap0Pe.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-white py-2  px-4  ">
        <div className="flex items-center justify-between py-5 px-7  border-b-2  border-gray-200">
          <Link to={`/`} className="sm:w-[15%] sm:h-[15%] h-[30%] w-[30%]">
            <img src={Logo} alt="Logo" className="w-full" />
          </Link>
          <span className="font-display text-3xl text-blue-600">Route</span>
        </div>
        <div className="text-center capitalize text-gray-500 font-display font-medium  py-5 mt-4">
          <p>© 2025 Recipe Route. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
