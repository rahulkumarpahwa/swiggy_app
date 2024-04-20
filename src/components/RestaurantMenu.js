// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const params = useParams();
  // console.log(params);
  const { resId } = useParams();

  // console.log("before useRestaurantMenu");

   const [showItems, setShowItems] = useState(true);

  

  const resInfo = useRestaurantMenu(resId); //custom functional Hook

  if (resInfo === null) return <Shimmer />;

  const { costForTwoMessage, cuisines, name } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  //@type: 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu mt-10">
      {/* {console.log("render called")} */}
      <div className="flex items-center flex-col">
        <h1 className="font-bold text-3xl">{name}</h1> <br />
        <h3>{costForTwoMessage}</h3>
        <br />
        <h3>{cuisines.join(", ")}</h3>
      </div>
      <br />
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice}
          </li>
        ))}
      </ul> */}
      <div>
        {categories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showItems}
            setShowItems={setShowItems}
          />
        ))}
        ;
      </div>
      <Link
        to={"/"}
        className="absolute top-[95px] right-5 bg-slate-50 my-20  border-2 p-2 border-slate-400 rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default RestaurantMenu;

//https://react.dev/learn/reusing-logic-with-custom-hooks#passing-reactive-values-between-hooks
