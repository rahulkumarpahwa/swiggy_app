import useListOfRestaurants from "../../utils/useListOfRestaurants";
import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const listOfRestaurants = useListOfRestaurants();
 // console.log(listOfRestaurants);
 const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setFilteredRestaurant(listOfRestaurants);
   // console.log("filter useEffect called");
  }, [listOfRestaurants]);

  // conditional rendering
  // if (listOfRestaurants.length === 0){
  // return <h1>Loading.....!!</h1>
  // }

  //or

  // if (listOfRestaurants.length === 0) {
  //   return (
  //     <div className="spin-loader">
  //       <div className="lds-ripple">
  //         <div></div>
  //         <div></div>
  //       </div>
  //     </div>
  //   );
  // }

  //or
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  //or

if(onlineStatus=== false){
  return <div className="online-status">
    <h1>Looks Like You are offline!! Please Check Your Internet Connection.</h1>
  </div>
}


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search here!"
            value={searchText}
            onChange={(e) => {
              // console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log(searchText);
              const filteredRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(typeof searchText);
              console.log(filteredRest);
              setSearchText(""); //added to delete whatever is written in the box after search button is pressed.
              setFilteredRestaurant(filteredRest);
            }}
          >
            <i className="fa-solid fa-search" style={{ color: "#51291f" }}></i>
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4
            // );
            // console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          onClick={() => {
            setFilteredRestaurant(listOfRestaurants);
          }}
        >
          Reset Filter
        </button>
      </div>
      <div className="res-container">
        {/* this res-container will contain lot of restaurant cards */}
        {/* <RestaurantCard
            resName="Meghana Foods"
            cuisine="Biryani, North Indian, Asian"
          />
          <RestaurantCard resName="KFC" cuisine="Burger, Fast food" /> */}

        {/* <RestaurantCard resData={resObj} />
          <RestaurantCard resData={resObj2} /> */}

        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} />
          <RestaurantCard resData={resList[10]} />
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} />
          <RestaurantCard resData={resList[13]} /> */}

        {/* this map fxn will make the looping of array resList */}
        {/* {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
