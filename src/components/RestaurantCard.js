import { CDN_URL } from "../../utils/constants";
// import UserContext from "../../utils/UserContext";
// import { useContext } from "react";

let styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // console.log(props);
  // const { resName, cuisine } = props;
  const { resData } = props;
  // console.log(resData);

  // const { loggedInUser } = useContext(UserContext); //user Context

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    veg,
    costForTwo,
    locality,
  } = resData?.info;

  //box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  return (
    <div
      className="res-card w-72 h-[20rem] m-4 p-2 rounded-lg bg-white hover:opacity-80 shadow-[1px_5px_8px_rgba(0,_0,_0,_0.134)] hover:scale-110 duration-150"
      // style={styleCard}
    >
      <div className="w-72 m-auto h-[50%]">
        <img
          className="res-logo w-[95%] h-full  rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      {/* <h3>{resName }</h3> */}
      {/* <h4>{cuisine}</h4> */}
      {/* <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes </h4> */}
      <div className="flex flex-col justify-center font-semibold gap-2 my-4 px-2">
        <h3 className="font-bold text-center text-md line-clamp-1 text-xl">
          {name}
        </h3>
        <h4 className="line-clamp-1 text-[12px  ] ">{cuisines.join(", ")}</h4>
        <h4 className="line-clamp-1 text-xs ">{locality}</h4>

        <div className="flex gap-2 text-[15px] font-bold my-3">
          <h4 className="text-green-600">
            <i className="fa-solid fa-star"></i> {avgRating}
          </h4>{" "}
          •
          <h4 className="text-purple-800">
            {" "}
            <i className="fa-solid fa-clock"></i> {sla.deliveryTime} min.{" "}
          </h4>
          •<h4 className="text-gray-800">{costForTwo}</h4>
        </div>

        {/* <h4 className="underline">@{loggedInUser} </h4> */}
      </div>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (resData) => {
    return (
      <div>
        <label className="absolute text-white bg-green-400 p-1 rounded-lg z-30 ml-7 mt-3 ">
          Pure Veg
        </label>
        <RestaurantCard {...resData} />
      </div>
    );
  };
};

export default RestaurantCard;
