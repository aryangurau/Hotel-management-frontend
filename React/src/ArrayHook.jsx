import { useState } from "react";

const ArrayHook = () => {
  const [cars, setCars] = useState([
    { name: "Tesla", model: "X", madeIn: 2000 },
    { name: "TATA", model: "Nexon", madeIn: 2020 },
  ]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          setCars((prev) =>
            prev.map((car, index) =>
              index === 0
                ? { ...car, madeIn: Number(e.target.value) }
                : car
            )
          )
        }
      />
      I have {cars[0]?.name} with {cars[0]?.model} and made in {cars[0]?.madeIn}
    </div>
  );
};

export default ArrayHook;
