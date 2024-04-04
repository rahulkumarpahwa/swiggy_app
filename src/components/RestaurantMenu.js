// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const params = useParams();
  // console.log(params);
  const { resId } = useParams();

  console.log("before useRestaurantMenu");

  const resInfo = useRestaurantMenu(resId); //custom functional Hook

  if (resInfo === null) return <Shimmer />;

  const { costForTwoMessage, cuisines, name } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      {console.log("render called")}
      <h1>{name}</h1> <br />
      <h3>{costForTwoMessage}</h3>
      <br />
      <h3>{cuisines.join(", ")}</h3>
      <br />
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
      <Link to={"/"}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default RestaurantMenu;

//https://react.dev/learn/reusing-logic-with-custom-hooks#passing-reactive-values-between-hooks
