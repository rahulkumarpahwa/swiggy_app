import { useState, useEffect } from "react";
import { GROCERY_API } from "../utils/constants";

const useGrocery = (resId) => {
  const [grocInfo, setGrocInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(GROCERY_API);
    const json = await data.json();
    setGrocInfo(json);
  };
  return grocInfo;
};

export default useGrocery;
