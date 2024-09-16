import { useCartContextHook } from "../context/Cart";


const CompB = () => {
  const {cartItems,addToCart} = useCartContextHook();
  return (
    <span style={{ border: "1px solid red" }}>
      <div>CompB</div>
      <p>
      {cartItems?.image} <br />
    { cartItems?.title} <br />
    {cartItems?.category} <br />
    {cartItems?.brand} <br />
    {cartItems?.price} 
    </p>
     
      <button onClick={addToCart}>ADD To Cart</button>
    </span>
  );
}

export default CompB
