import useListOfRestaurants from "../../utils/useListOfRestaurants";
import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { withVegLabel } from "./RestaurantCard";
import UserContext from "../../utils/UserContext";
import UserContext from "../../utils/UserContext";

//data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.isOpen

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const { loggedInUser, setUserName } = useContext(UserContext); // for using context

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  const listOfRestaurants = useListOfRestaurants();
  const onlineStatus = useOnlineStatus();
  console.log(listOfRestaurants);

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

  if (onlineStatus === false) {
    return (
      <div className="online-status">
        <h1>
          Looks Like You are offline!! Please Check Your Internet Connection.
        </h1>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center gap-10 m-4 p-2 ">
        <div className="flex justify-between mx-4 border-4 border-neutral-500 rounded-lg">
          <input
            type="text"
            className="search-box w-[400px] text-center text-neutral-500 rounded-lg mr-1 focus:outline-none "
            placeholder="Search here!"
            value={searchText}
            onChange={(e) => {
              // console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-neutral-500 "
            onClick={() => {
              // console.log(searchText);
              const filteredRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(typeof searchText);
              // console.log(filteredRest);
              setSearchText(""); //added to delete whatever is written in the box after search button is pressed.
              setFilteredRestaurant(filteredRest);
            }}
          >
            <i className="fa-solid fa-search mx-3 text-white "></i>
          </button>
        </div>


{/* content changing */}
        {/* <div>
          <input
            value={loggedInUser}
            placeholder="Type and See magic!"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="p-2 border-4 text-center bg-white border-slate-300 rounded-lg"
          />
        </div> */}

        <button
          className="filter-btn bg-neutral-500 text-white p-1 rounded-lg text-bold"
          onClick={() => {
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4
            // );
            // console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          <div className="text-teal-400">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          Top Rated Restaurant
        </button>
        <button
          className="bg-neutral-500 text-white p-1 rounded-lg text-bold"
          onClick={() => {
            setFilteredRestaurant(listOfRestaurants);
          }}
        >
          <div>
            <i className="fa-solid fa-xmark text-red-500"></i>
          </div>
          Reset
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-center items-center w-full">
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
            {restaurant.info.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
