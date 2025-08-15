import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="p-4 overflow-hidden sm:ml-64 bg-[#F4F2EE] min-h-screen" onClick={() => setIsOpen(false) }>
        <div className=" container py-8 px-4 mx-auto">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
