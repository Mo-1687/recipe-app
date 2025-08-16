import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import Card from "../Card/Card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { input } = useOutletContext();
  const [category, setCategory] = useState(" ");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // call API
  async function getMeals() {
    try {
      if (input && input.trim() !== "") {
        setLoading(true);
        setCategory("");
        const response = await axios.get(
          `https://themealdb.com/api/json/v1/1/search.php?s=${input}`
        );
        setMeals(response.data.meals || []);
        setLoading(false);
      } else {
        // Reset category to default when input is empty
        if (category === "") {
          setCategory(" ");
        }

        if (category === " ") {
          setLoading(true);
          const response = await axios.get(
            `https://themealdb.com/api/json/v1/1/search.php?s= `
          );
          setMeals(response.data.meals || []);
          console.log(response.data.meals);
          setLoading(false);
        } else {
          setLoading(true);
          const response = await axios.get(
            `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
          );
          setMeals(response.data.meals || []);
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]); // Reset meals on error
      setLoading(false);
    }
  }

  useEffect(() => {
    getMeals();
  }, [input, category]);

  return (
    <>
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin fixed top-1/2 left-1/3 md:left-1/2 w-40 h-40 text-amber-600" />
      ) : (
        <>
          <Category
            category={category}
            setCategory={setCategory}
            searchType={"c=list"}
            isHome={true}
          />
          <Card meals={meals} />
        </>
      )}
    </>
  );
};

export default Home;
