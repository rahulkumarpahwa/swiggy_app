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

  const { cloudinaryImageId, name, cuisines, avgRating, sla, veg, costForTwo } =
    resData?.info;

  return (
    <div
      className="res-card w-80 h-[27rem] m-4 p-2 rounded-lg bg-[#f67016] hover:opacity-80"
      // style={styleCard}
    >
      <div className="w-80 m-auto h-[60%]">
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
      <div className="flex flex-col justify-center font-semibold gap-2 my-2 px-2">
        <h3 className="font-bold text-center text-md line-clamp-1">{name}</h3>
        <h4 className="line-clamp-1">{cuisines.join(", ")}</h4>
        <h4 className="text-teal-400">
          <i className="fa-solid fa-star"></i> {avgRating} stars
        </h4>
        <h4 className="text-purple-800">
          {" "}
          <i className="fa-solid fa-clock"></i> {sla.deliveryTime} minutes{" "}
        </h4>
        <h4 className="text-gray-800">{costForTwo}</h4>
        {/* <h4 className="underline">@{loggedInUser} </h4> */}
      </div>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (resData) => {
    return (
      <div>
        <label className="absolute text-white bg-green-400 p-1 rounded-lg z-30 ml-7 mt-3">
          Pure Veg
        </label>
        <RestaurantCard {...resData} />
      </div>
    );
  };
};

export default RestaurantCard;
