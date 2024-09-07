import { useState } from "react";

const ObjectHook = () => {
  const [mobile, setMobile] = useState({
    brand: "Apple",
    model: "Iphone 15 pro",
    launch: 2023,
    isAvailable: true,
  });

  return (
    <div> 
      <input
        placeholder="enter launch data"
        onChange={(e) =>
          setMobile((prev) => {
            return { ...prev, launch: Number(e.target.value) };
          })
        }
      />
      I have {mobile?.brand} {mobile?.model} launched in {mobile?.launch}
    </div>
  );
};

export default ObjectHook;
