import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useApi from "../hooks/useApi";
import "./effectHomework.css";

// Pulling or fetching products API
const EffectHomework = () => {
  const [search, setSearch] = useState("");
  const debounceSearchTerm = useDebounce({ value: search }); // Ensure this is read

  // Use debounceSearchTerm for the API call
  const { loading, errMsg, data } = useApi({
    url: `/products/search?q=${debounceSearchTerm}`, // Using debounceSearchTerm here
  });

  if (loading) {
    return <>Data is loading</>;
  }
  if (errMsg) {
    return <>{errMsg}</>;
  }

  return (
    <>
      <div className="container py-5">
        <div className="row px-0">
          <h1>Products list</h1>
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products"
          />
          {data?.products?.length > 0 &&
            data?.products.map((product, id) => (
              <div
                key={id}
                className="card m-2 shadow cards"
                style={{ width: "18rem" }}
              >
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body fw-bold">
                  <p className="card-text"> {product.title}</p>
                  <p className="card-text"> Rating: {product.rating}</p>
                  <p className="card-text"> Price: Rs.{product.price}</p>
                </div>
              </div>
            ))}
          {data?.products && data?.products.length === 0 && (
            <>
              <b>{debounceSearchTerm}</b> not found
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EffectHomework;
