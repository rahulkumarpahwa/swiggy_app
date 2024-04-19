const ItemList = ({ items }) => {
  return (
    <div>
      {console.log(items)}
      {/* <div>{items}</div> */}
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex flex-col my-4 p-2 border-gray-200 border-b-2 mx-2"
        >
          <div className="flex justify-between">
            <span className="font-semibold">{item?.card?.info?.name}</span>
            <span>
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>{" "}
          </div>
          <div className="text-xs">
            {" "}
            <p>{item?.card?.info?.description}</p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
