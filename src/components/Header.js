import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

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
    <div className="header">
      <div className="logo-container">
        {" "}
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "#51291f" }}
            ></i>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("logout") : setBtnName("Login");
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
