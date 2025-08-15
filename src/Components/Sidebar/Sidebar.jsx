import { useState } from "react";
import Logo from "../../assets/logo-BfNap0Pe.png";
import { GiMeal } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const [active, setActive] = useState("meal");
  const lists = ["meal", "ingredients", "area"];
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={(e) => {
          if (e) {
            setIsOpen(!isOpen);
          }
        }}
        className="inline-flex fixed -top-2 -left-2.5 bg-white z-40 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 bottom-0  left-0 z-30 bg-gray-50 w-60 sm:h-60 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 ">
          <img src={Logo} alt="Logo" className="w-full mb-12" />

          {lists.map((list, index) => {
            return (
              <Link
                key={index}
                to={`/`}
                className={`flex items-center font-display capitalize font-medium text-xl   mb-4 gap-3 px-6 py-2 rounded-3xl shadow border-gray-300 hover:scale-105 duration-300 hover:shadow-lg ${
                  active === list
                    ? "bg-orange-400 text-white font-semibold shadow-amber-600 border-orange-400 scale-105"
                    : "bg-white text-black"
                }`}
                onClick={() => setActive(list)}
              >
                <GiMeal />
                {list}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
