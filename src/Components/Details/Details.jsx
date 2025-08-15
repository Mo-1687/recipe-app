import axios from "axios";
import { useEffect, useState } from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Details = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getMeal() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (!response.data.meals || response.data.meals.length === 0) {
        setError(true);
        setMeal(null);
      } else {
        setMeal(response.data.meals[0]);
        setError(false);
      }
    } catch (error) {
      console.error("Error fetching meal:", error);
      setError(true);
      setMeal(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMeal();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin fixed   top-1/2 left-1/3 md:left-1/2 w-40 h-40 text-amber-600" />
      </div>
    );
  }

  if (error || !meal) {
    return <NotFound />;
  }

  return (
    <div className="flex  gap-5 xl:flex-row flex-col font-display">
      <div className="img-container flex-1/3">
        <h3 className="font-header text-6xl font-bold">{meal.strMeal}</h3>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full my-5 rounded-3xl"
        />
        <div className="flex items-center justify-center gap-2">
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              className="bg-red-500 duration-300 flex items-center gap-2 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
              Youtube
            </a>
          )}
          {meal.strSource && (
            <a
              href={meal.strSource}
              className="bg-green-500 flex items-center gap-2 duration-300 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEarthAfrica />
              Source
            </a>
          )}
        </div>
      </div>

      <div className="recipe-container font-medium self-center  flex-1/2">
        <p>{meal.strInstructions}</p>
      </div>

      <div className="ingredients-container flex-1/3 font-display bg-white border border-gray-200 rounded-3xl p-5">
        <h3 className="text-2xl font-bold p-2 border-b-4 border-gray-200">
          Ingredients
        </h3>
        <ul className="mt-3">
          {Array.from({ length: 20 }).map((_, index) => {
            const ingredientKey = `strIngredient${index + 1}`;
            const measureKey = `strMeasure${index + 1}`;
            const ingredient = meal[ingredientKey];
            const measure = meal[measureKey];

            return ingredient && ingredient.trim() ? (
              <li
                key={index}
                className="border-b-2 border-gray-200 p-2 flex justify-between items-center"
              >
                <span>{ingredient}:</span>
                <span>{measure}</span>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Details;
