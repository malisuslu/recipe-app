import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";

function Home() {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [meal, setMeal] = useState("");
  const [header, setHeader] = useState("");

  const fetchRecipe = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&mealType=${meal}`
    );
    setRecipes(response.data.hits);
    setHeader(`${recipe} on ${meal}`);
    setRecipe("");
    setMeal("");
  };

  return (
    <>
      <h1 className="text-center text-amber-500 font-serif text-3xl my-2 mx-6">
        Recipe App
      </h1>
      <form className="w-2/3 flex flex-col justify-center mx-auto md:flex md:flex-row md:justify-center md:mx-auto md:w-1/2">
        <Input
          type="text"
          placeholder="Search"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out md:mx-4 my-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          required={true}
        />
        <select
          name="mealType"
          id="mealType"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out md:mx-4 my-2  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          required={true}
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        >
          <option value="">Select</option>
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="lunch">Lunch/Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
        <Button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:my-2 px-6 rounded md:mx-3 mx-auto"
          onClick={fetchRecipe}
        >
          Search
        </Button>
      </form>
      {recipes.length > 0 && (
        <h1 className="mx-auto italic text-orange-300 bg-black bg-opacity-30 rounded-[14px] text-5xl py-2 px-4 my-6 border-2 border-orange-300 align-middle w-fit">
          {header}
        </h1>
      )}
      <div className=" w-screen px-4 flex flex-wrap justify-start">
        {recipes.map((recipe) => (
          <Card
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            description={recipe.recipe.source}
            image={recipe.recipe.image}
            link={recipe.recipe.url}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
