import React from "react";
import { Link } from "react-router-dom";
import amazon from "./amazon.jpeg";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../State/StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src={amazon} alt="" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link className="header_link" to={!user && "/login"}>
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">
              Hello {user ? user.email : ""}
            </span>
            <span className="header_optionLineTwo">
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_baseketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
