import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
    console.log("useRestaurantMenu called");
  }, []);

  const fetchMenu = async () => {
    const url = MENU_API + resId;
    const data = await fetch(url); // this part "&catalog_qa=undefined&submitAction=ENTER" is optional and it is just for tracking.
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
