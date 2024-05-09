import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
import logo  from "../../utils/logo.png";

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
    <div className="px-4 py-1 flex justify-between items-center   shadow-[0_3px_4px_rgba(0,_0,_0,_0.134)] uppercase">
      <div className="logo-container">
        {" "}
        <Link to="/">
          <img className="logo w-24" src={logo} />
        </Link>
      </div>
      <div className="nav-items ">
        <ul className="flex items-center justify-center gap-5 font-semibold text-gray-800 text-lg ">
          <li className="">
            <Link
              to="/"
              className="hover:bg-[#f67016] hover:text-white p-1 rounded-lg"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/about"
              className="hover:bg-[#f67016] hover:text-white p-1 rounded-lg"
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              to="/contact"
              className="hover:bg-[#f67016] hover:text-white p-1 rounded-lg"
            >
              Contact Us
            </Link>
          </li>
          <li className="">
            <Link
              to="/grocery"
              className="hover:bg-[#f67016] hover:text-white p-1 rounded-lg"
            >
              Grocery
            </Link>
          </li>
          <li className="hover:bg-[#f67016] hover:text-white p-1 rounded-lg">
            <i className="fa-solid fa-cart-shopping "></i> Cart
          </li>
          <li className="text-gray-800 text-lg hover:bg-[#f67016] hover:text-white p-1 rounded-lg">
            @{data.loggedInUser.toUpperCase()}
          </li>
          <button
            className="hover:bg-[#f67016] hover:text-white p-1 rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName} {onlineStatus ? "🟢" : "🔴"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
