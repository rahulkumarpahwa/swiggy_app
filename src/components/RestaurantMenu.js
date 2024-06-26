// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../../utils/constants";
import Shimmer2 from "./Shimmer2";

const RestaurantMenu = () => {
  // const params = useParams();
  // console.log(params);
  const { resId } = useParams();

  // console.log("before useRestaurantMenu");
  //  const [showItems, setShowItems] = useState(true);
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId); //custom functional Hook

  if (resInfo === null) return <Shimmer2 />;

  const { costForTwoMessage, cuisines, name, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  console.log(resInfo?.cards[2]?.card?.card?.info);

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
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
      <div className="flex items-center justify-center gap-40">
        <div>
          <h1 className="font-bold text-3xl">{name}</h1> <br />
          <h3 className="font-bold text-xl">{costForTwoMessage}</h3>
          <br />
          <h3 className="font-bold text-xl">{cuisines.join(", ")}</h3>
        </div>
        <div className="w-40 shadow-lg">
          <img src={CDN_URL + cloudinaryImageId} className="rounded-lg" />
        </div>
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
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
      <div className="flex items-center justify-center my-5">
        <Link
          to={"/"}
          className="bg-neutral-500 text-white p-1 px-20 rounded-lg text-bold text-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RestaurantMenu;

//https://react.dev/learn/reusing-logic-with-custom-hooks#passing-reactive-values-between-hooks
