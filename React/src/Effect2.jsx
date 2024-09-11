import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useApi from "../hooks/useApi";
//website data pull
const Effect2 = () => {
  const [search, setSearch] = useState([]); //resolve
  const debounceSearchTerm = useDebounce({ value: search });

  const { loading, errMsg, data } = useApi({
    url: `/recipes/search?q=${debounceSearchTerm}`,
  });
  if (loading) {
    return <>Data is loading</>;
  }
  if (errMsg) {
    return <>{errMsg}</>;
  }
  return (
    <>
      <div className="container shadow ">
        <div className="row px-0">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search recipes"
          />
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
              {data?.recipes?.length > 0 &&
                data?.recipes?.map((recipe, index) => {
                  return (
                    <>
                      <tr className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <td key={index}>{index}</td>
                        <td>{recipe.name}</td>
                        <td>{recipe.ingredients.slice(0, 9).map((a) => a)}</td>
                        <td>{recipe.mealType}</td>
                        <td>{recipe.cuisine}</td>
                        <td>{recipe.difficulty}</td>
                        <td>{recipe.cookTimeMinutes}</td>
                        <td>
                          <img width={100} src={recipe.image} alt="" />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
          {data?.recipes && data?.recipes?.length === 0 && (
            <>
              <b>{recipes}</b> not found
            </>
          )}

          {/* pagination control */}
        </div>
      </div>
    </>
  );
};

export default Effect2;
