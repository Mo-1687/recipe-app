import { FaEarthAfrica } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  return (
    <>
      {meal.strMealThumb && (
        <div className=" text-center group  px-12 py-4  font-display bg-white border border-gray-200 cursor-pointer rounded-[35px] shadow-sm  hover:scale-105 duration-300 transition-all hover:shadow-lg">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-full w-full -translate-y-9 group-hover:rotate-[360deg] duration-700"
          />

          <div className="name text-xl mb-3 font-bold">
            {meal.strMeal.split(" ").slice(0, 2).join(" ")}
          </div>
          {meal.strArea && (
            <div className="area flex items-center justify-center gap-5  text-xl text-green-500">
              <FaEarthAfrica />
              {meal.strArea}
            </div>
          )}

          <Link
            to={`/details/${meal.idMeal}`}
            className="capitalize  bg-green-500 px-5 py-4 hover:bg-green-700 duration-300 rounded-full text-white block mt-5"
          >
            View Recipe
          </Link>
        </div>
      )}
    </>
  );
};

export default Card;
