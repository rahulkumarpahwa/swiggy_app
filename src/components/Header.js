import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
    <div className="shadow-2xl px-4 py-1 flex justify-between items-center bg-slate-100">
      <div className="logo-container">
        {" "}
        <Link to="/">
          <img className="logo w-40 mix-blend-darken" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items ">
        <ul className="flex items-center text-xl ">
          <li className="mr-4 font-semibold">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="mr-4 font-semibold">
            <Link to="/about" className="hover:underline">
              AboutUs
            </Link>
          </li>
          <li className="mr-4 font-semibold">
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li className="mr-4 font-semibold">
            <Link to="/grocery" className="hover:underline">
              Grocery
            </Link>
          </li>

          <li className="mr-4 font-semibold">
            Online status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mr-4 font-semibold">
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "#51291f" }}
            ></i>
          </li>
          <button
            className="border p-2 rounded-lg bg-slate-400"
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
