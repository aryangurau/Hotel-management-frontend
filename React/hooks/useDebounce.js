//dynamic search with cleanup  //can be used in other search sections like for users, rooms, orders

import { useEffect, useState } from "react";

const useDebounce = ({ value, delayInMs = 1500 }) => {
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearchTerm(value);
    }, delayInMs);
    return () => clearTimeout(timer); //cleanup
  }, [value, delayInMs]); //state and props are passed
  return debounceSearchTerm;
};
export default useDebounce;
