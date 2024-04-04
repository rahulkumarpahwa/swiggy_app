import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestuarants] = useState([]);
  //or
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestuarants] = arr;

  //or
  // const arr = useState(resList);
  // const listOfRestaurants= arr[0];
  // const setListOfRestuarants = arr[1];
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "41297",
  //       name: "KFC",
  //       cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
  //       costForTwo: "₹600 for two",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       avgRating: 4.1,

  //       sla: {
  //         deliveryTime: 29,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "41298",
  //       name: "Dominos",
  //       cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
  //       costForTwo: "₹600 for two",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       avgRating: 3.8,

  //       sla: {
  //         deliveryTime: 29,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "41299",
  //       name: "CCD",
  //       cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
  //       costForTwo: "₹600 for two",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       avgRating: 3.4,

  //       sla: {
  //         deliveryTime: 29,
  //       },
  //     },
  //   },
  // ];

  // console.log("Body render");

  useEffect(() => {
    fetchData();
    //console.log("restaurant list use effect called");
  }, []);

  const fetchData = async () => {
    const url = RES_API;
    const data = await fetch(url);
    const json = await data.json();
    // console.log(json);
    setListOfRestuarants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants;
};

export default useListOfRestaurants;
