import axios from "axios";
import { useEffect, useState } from "react";

const Category = ({ setCategory, category, searchType, isHome }) => {
  const [list, setList] = useState([]);

  // Call API
  async function getCategories() {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/list.php?${searchType}`
      );
      setList(response.data.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const categoryList = list.map((item, index) => (
    <li
      key={index}
      className={`capitalize cursor-pointer text-gray-500 border border-gray-300 font-semibold rounded-full px-4 py-2 me-2 shadow hover:shadow-lg font-display duration-500 ${
        category === item.strCategory || category === item.strArea
          ? "bg-black text-white hover:bg-black hover:text-white"
          : " hover:bg-white "
      }`}
      onClick={() =>
        setCategory(item.strCategory ? item.strCategory : item.strArea)
      }
    >
      {item.strCategory
        ? item.strCategory
        : item.strArea === "Unknown"
        ? "Kazakhstan"
        : item.strArea}
    </li>
  ));
  return (
    <>
      <ul className="hidden sm:flex flex-wrap gap-4 mt-8 font-display">
        {isHome && (
          <li
            className={`capitalize cursor-pointer text-gray-500 border border-gray-300 rounded-full px-4 py-2 me-2 font-semibold shadow hover:shadow-lg font-display duration-500 ${
              category === " "
                ? "bg-black text-white hover:bg-black hover:text-white"
                : " hover:bg-white "
            }`}
            onClick={() => setCategory(" ")}
          >
            All
          </li>
        )}
        {categoryList}
      </ul>

      <select
        name="categories"
        id="categories"
        className="flex sm:hidden w-full p-2 rounded-md bg-white shadow-lg font-display capitalize mt-8"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {isHome && <option value=" ">All</option>}
        {list.map((item, index) => (
          <option
            key={index}
            value={item.strCategory ? item.strCategory : item.strArea}
          >
            {item.strCategory ? item.strCategory : item.strArea}
          </option>
        ))}
      </select>
    </>
  );
};

export default Category;
