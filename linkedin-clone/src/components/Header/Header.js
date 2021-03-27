import React from "react";
import { useDispatch } from "react-redux";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "../Header/HeaderOption";
import {
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@material-ui/icons";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />

          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="avatar" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
