import { useState } from "react";

import useDebounce from "../hooks/useDebounce";
import useApi from "../hooks/useApi";

const Effect3 = () => {
  const [search, setSearch] = useState("");
 
  const debounceSearchTerm = useDebounce({ value:search });

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
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
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

export default Effect3;
