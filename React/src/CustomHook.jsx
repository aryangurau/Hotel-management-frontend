import {  useState } from "react";

import useDebounce from "../hooks/useDebounce";
import useApi from "../hooks/useApi";

const CustomHook = () => {
  
  const [tempSearch, setTempSearch ]= useState("")
  const debounceSearchTerm = useDebounce({ value: tempSearch });
  const {loading, errMsg, data} = useApi({url:`/recipes/search?q=${debounceSearchTerm}`})
  
     if (loading) {
      return <>Data is loading</>;
    }
  if (errMsg) {
    return <>{errMsg}</>;
  }
  
  return (
    <div>
      <input
        onChange={(e) => setTempSearch(e.target.value)}
        placeholder="Search any food recipes"
      />
      <h1>Results</h1>
      {data?.recipes && data?.recipes.length > 0 ? (
        data?.recipes.map((r, i) => {
          return <li key={i}>{r.name}</li>;
        })
      ) : (
        <>
          searching <b>{debounceSearchTerm}</b> result not found
        </>
      )}
    </div>
  );
};

export default CustomHook;
