import { FaEarthAfrica } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/223687-P2LAZ2-485.jpg";

const Card = ({ meals }) => {
  const mealsList = meals.map((meal) => {
    return (
      meal.strMealThumb && (
        <div
          key={meal.idMeal}
          className="text-center group px-12 py-4 font-display bg-white border border-gray-200 cursor-pointer rounded-[35px] shadow-sm hover:scale-105 duration-300 transition-all hover:shadow-lg"
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-full w-full -translate-y-9 group-hover:rotate-[360deg] duration-700"
          />

          <div className="name text-xl mb-3 font-bold">
            {meal.strMeal.split(" ").slice(0, 2).join(" ")}
          </div>

          {meal.strArea && (
            <div className="area flex items-center justify-center gap-5 text-xl text-green-500">
              <FaEarthAfrica />
              {meal.strArea}
            </div>
          )}

          <Link
            to={`/details/${meal.idMeal}`}
            className="capitalize bg-green-500 px-5 py-4 hover:bg-green-700 duration-300 rounded-full text-white block mt-5"
          >
            View Recipe
          </Link>
        </div>
      )
    );
  });
  if (mealsList.length === 0) {
    return (
      <div className="flex gap-3 flex-col items-center justify-center mt-8">
        <h2 className="text-xl font-bold font-display text-[#F29724]">
          No Meals Found
        </h2>
        <img src={NotFoundImage} alt="Not Found" className="w-1/2 mb-4" />
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {mealsList}
      </div>
    </>
  );
};

export default Card;
