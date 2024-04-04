import {CDN_URL} from "../../utils/constants";

let styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // console.log(props);
  // const { resName, cuisine } = props;
  const { resData } = props;
  //   console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />

      {/* <h3>{resName }</h3> */}
      {/* <h4>{cuisine}</h4> */}
      {/* <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes </h4> */}

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
