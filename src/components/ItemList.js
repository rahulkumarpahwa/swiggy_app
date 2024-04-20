import { CDN_URL } from "../../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {console.log(items)}
      {/* <div>{items}</div> */}
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex my-4 p-2 border-gray-200 border-b-2 mx-2 justify-between items-center text-left"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold mr-2">{item?.card?.info?.name}</span>
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>{" "}
            </div>
            <p className="text-xs"> {item?.card?.info?.description}</p>{" "}
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-1 text-xs bg-black my-0 text-white shadow-xl mx-auto rounded-sm">Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg" />{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
