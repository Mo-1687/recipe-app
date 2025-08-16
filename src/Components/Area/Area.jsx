import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import Card from "../Card/Card";
import Category from "../Category/Category";
import { useOutletContext } from "react-router-dom";

const Area = () => {
  const [loading, setLoading] = useState(false);
  const [area, setArea] = useState("American");
  const [meals, setMeals] = useState([]);
  const { input } = useOutletContext();

  async function getAreaMeals() {
    try {
      if (input && input.trim() !== "") {
        setLoading(true);
        const response = await axios.get(
          `https://themealdb.com/api/json/v1/1/search.php?s=${input}`
        );
        setMeals(response.data.meals || []);
        setArea(""); // Clear area when searching by input
        setLoading(false);
      } else {
        // Reset area to default when input is empty
        if (area === "") {
          setArea("American");
        }
        setLoading(true);
        const response = await axios.get(
          `https://themealdb.com/api/json/v1/1/filter.php?a=${
            area === "" ? "American" : area
          }`
        );
        setMeals(response.data.meals || []);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAreaMeals();
  }, [area, input]);

  return (
    <>
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin fixed top-1/2 left-1/3 md:left-1/2 w-40 h-40 text-amber-600" />
      ) : (
        <>
          <Category
            category={area}
            setCategory={setArea}
            searchType={"a=list"}
            isHome={false}
          />
          <Card meals={meals} />
        </>
      )}
    </>
  );
};

export default Area;
