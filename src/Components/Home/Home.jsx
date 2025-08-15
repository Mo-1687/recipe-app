import axios from "axios";
import  { useEffect, useState } from "react";
import Category from "../Category/Category";
import Card from "../Card/Card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {
  const [category, setCategory] = useState(" ");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // call API
  async function getMeals() {
    try {
      if (category === " ") {
        setLoading(true);
        const response = await axios.get(
          `https://themealdb.com/api/json/v1/1/search.php?s= `
        );
        setMeals(response.data.meals);
        setLoading(false);
        return;
      }
      setLoading(true);
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }

  useEffect(() => {
    getMeals();
  }, [category]);

  // render Meals

  const mealsList = meals.map((meal) => {
    return <Card key={meal.idMeal} meal={meal} />;
  });
  return (
    <>
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin fixed   top-1/2 left-1/3 md:left-1/2 w-40 h-40 text-amber-600" />
      ) : (
        <>
          <h1 className="font-header bg-gradient-to-r p-2 from-[#F29724] via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent text-4xl font-bold">
            Learn, Cook, Eat Your Food
          </h1>

          <Category category={category} setCategory={setCategory} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 mt-12">
            {mealsList}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
