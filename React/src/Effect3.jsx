import { useEffect, useState } from "react";
import { instance } from "../utils/axios";

const Effect3 = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]); //resolve
  const [loading, setLoading] = useState(false); //pending
  const [errMSg, setErrMsg] = useState(""); //reject

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const { data } = await instance
        .get(`/recipes/search?q=${search}`, { signal: controller.signal })
        .catch((e) => {
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
    return () => controller.abort();
  }, [search]);

  //   if (loading) {
  //     return <>Data is loading</>;
  //   }
  if (errMSg) {
    return <>{errMSg}</>;
  }
  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search any food recipes"
      />
      <h1>Results</h1>
      {recipes && recipes.length > 0 ? (
        recipes.map((r, i) => {
          return <li key={i}>{r.name}</li>;
        })
      ) : (
        <>
          searching <b>{search}</b> result not found
        </>
      )}
    </div>
  );
};

export default Effect3;
