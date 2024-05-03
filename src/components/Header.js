import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  // console.log("header render");

  //case 1:
  // useEffect(() => {
  //   console.log("useEffect called");
  // });

  //case 2:
  // useEffect(() => {
  //   console.log("useEffect called");
  // },[]);

  //case 3:
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnName]);

  return (
    <div className="relative shadow-md px-4 py-1 flex justify-between items-center bg-neutral-100">
      <div className="absolute text-md text-white top-0 right-0 m-2 border bg-gray-500 border-gray-500 rounded-lg px-1">
        Online Status : {onlineStatus ? "🟢" : "🔴"}
      </div>

      <div className="logo-container">
        {" "}
        <Link to="/">
          <img className="logo w-32 mix-blend-darken" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items ">
        <ul className="flex items-center justify-center gap-5 font-semibold text-gray-800 text-lg ">
          <li className="">
            <Link to="/" className="hover:underline hover:text-neutral-500">
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/about"
              className="hover:underline hover:text-neutral-500"
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              to="/contact"
              className="hover:underline hover:text-neutral-500"
            >
              Contact Us
            </Link>
          </li>
          <li className="">
            <Link
              to="/grocery"
              className="hover:underline hover:text-neutral-500"
            >
              Grocery
            </Link>
          </li>
          <li className="hover:text-neutral-700">
            <i className="fa-solid fa-cart-shopping "></i> Cart
          </li>
          <li className="text-gray-800 text-lg hover:text-neutral-500">
            @{data.loggedInUser.toUpperCase()}
          </li>
          <button
            className="border py-1 px-2 rounded-lg text-[1rem] bg-gray-500 text-white"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
