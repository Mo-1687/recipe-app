import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className="p-4 overflow-hidden sm:ml-64 bg-[#F4F2EE] min-h-screen"
        onClick={() => setIsOpen(false)}
      >
        <div className=" container py-8 px-4 mx-auto">
          <h1 className="font-header bg-gradient-to-r p-2 from-[#F29724] via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent text-4xl font-bold">
            Learn, Cook, Eat Your Food
          </h1>
          <form className=" my-7">
            <input
              className="border-2 w-[40%] border-gray-600 bg-white font-display focus:border-[#F29724] focus:outline-none shadow rounded-md p-2"
              type="text"
              placeholder="Meal Name"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
          <Outlet context={{ input }} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
