import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  
  //  const [showItems, setShowItems] = useState(true);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 my-4 rounded-xs">
      <div
        className=" flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-lg font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-gray-400">▼</span>
      </div>
      {showItems && (
        <ItemList items={data.itemCards} />
      )}
    </div>
  );
};

export default RestaurantCategory;
