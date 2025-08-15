import React from "react";
import NotFoundImage from "../../assets/223687-P2LAZ2-485.jpg";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-1/2 h-1/2 mx-auto   ">
      <img src={NotFoundImage} alt="" className=" w-full" />
      <Link
        to="/"
        className="bg-[#F99593]  flex items-center justify-center px-5 py-4 hover:bg-[#F99593] duration-300 capitalize font-bold font-display text-xl  text-white "
      >
        go to Home page
      </Link>
    </div>
  );
};

export default NotFound;
