import { CDN_URL } from "../../utils/constants";

const GroceryCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-28">
        <img src={CDN_URL + item.imageId} className="w-full" />
      </div>
      <h6 className="font-semibold text-md" >{item.displayName}</h6>
    </div>
  );
};

export default GroceryCard;
