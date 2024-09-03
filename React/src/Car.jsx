const Car = ({ name, hello }) => {
  const sayTesla = () => {
    alert("Tesla is coming");
  };
  const items = () => {
    const changingItem = document.getElementById("chooseitems").value;

    if (changingItem) {
      alert(`my choice is ${changingItem}`);
    }
  };
  return (
    <>
      <p>This is first react component Car made by {name}</p>
      <p>{hello()}</p>
      <button onClick={sayTesla}>tesla</button>

      <select id="chooseitems" onChange={items}>
        <option value="">select your drink</option>
        <option value="Coffee"> Coffee</option>
        <option value="Milk">Milk</option>
        <option value="Tea">Tea</option>
      </select>
    </>
  );
};

export default Car;
