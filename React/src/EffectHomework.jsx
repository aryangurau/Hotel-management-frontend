import { useEffect, useState } from "react";
import { instance } from "../utils/axios";
import "./effectHomework.css";

//pulling or fetching products API
const EffectHomework = () => {
  const [products, setProducts] = useState([]); //resolves
  const [loading, setLoading] = useState(false); //pending
  const [errMSg, setErrMsg] = useState(""); //reject

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await instance.get("/products").catch((e) => {
        console.log({ data });
        setErrMsg(e?.response.statusText);
        setLoading(false);
      });
      setProducts(data.products);
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
      <div className="container py-5">
        <div className="row px-0">
          <h1>Products list</h1>
          {products.length > 0 &&
            products.map((product, id) => {
              return (
                <>
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
                      <p className="card-text"> rating: {product.rating}</p>
                      <p className="card-text"> price: Rs.{product.price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          <h1>Products List</h1>

          {/* <table>
            <thead className="shadow py-5 bg-primary">
              <tr>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">category</th>
                <th scope="col">price</th>
                <th scope="col">rating</th>
                <th scope="col">brand</th>
           
                <th scope="col">images</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                products.map((product, id) => {
                  return (
                    <>
                      <tr className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <td key={id}>{id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.rating}</td>
                        <td>{product.brand}</td>
                     
                        <td>
                          <img width={100} src={product.thumbnail} alt="" />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table> */}
          {products && products.length === 0 && <>Products not found</>}
        </div>
      </div>
    </>
  );
};

export default EffectHomework;
