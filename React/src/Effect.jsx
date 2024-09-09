import { useState, useEffect } from "react";
import { instance } from "../utils/axios";

//website data pull
const Effect = () => {
  const [recipes, setRecipes] = useState([]); //resolve
  const [loading, setLoading] = useState(false); //pending
  const [errMSg, setErrMsg] = useState(""); //reject

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await instance.get("/recipes").catch((e) => {
        setErrMsg(e?.response.statusText);
        setLoading(false);
      });
      setRecipes(data.recipes);
      setLoading(false);
    };
    try {
      setLoading(true);
      setErrMsg("");
      fetchData();
    } catch (e) {
      setErrMsg(e.toString());
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <>Data is loading</>;
  }
  if (errMSg) {
    return <>{errMSg}</>;
  }
  return (
    <>
      <div className="container shadow ">
        <div className="row px-0">
          <table>
            <thead className="shadow py-5 bg-primary">
              <tr>
                <th scope="col">index</th>
                <th scope="col">RecipeName</th>
                <th scope="col">Ingredients</th>
                <th scope="col">MealType</th>
                <th scope="col">Cuisine</th>
                <th scope="col">Level</th>
                <th scope="col">cookTime(min)</th>
                <th scope="col">Recipe looks</th>
              </tr>
            </thead>
            <tbody>
              {recipes.length > 0 &&
                recipes.map((recipe, index) => {
                  return (
                    <>
                      <tr className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <td key={index}  >{index}</td>
                        <td>{recipe.name}</td>
                        <td>{recipe.ingredients.slice(0,9).map((a)=>a)}</td>
                        <td>{recipe.mealType}</td>
                        <td>{recipe.cuisine}</td>
                        <td>{recipe.difficulty}</td>
                        <td>{recipe.cookTimeMinutes}</td>
                        <td><img width={100} src={recipe.image} alt="" /></td>
                      </tr>
                    </>
                  );
                })}

            </tbody>
          </table>
            {recipes && recipes.length === 0 && <>Recpies not found</>}
        
        </div>
      </div>
    </>
  );
};

export default Effect;
