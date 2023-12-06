// React and Router

import { Link } from "react-router-dom";
// CSS
import "../../styles/section/Header.css";
// MUI icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MicIcon from "@mui/icons-material/Mic";
// MUI components
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuOutlinedIcon className="header__icon" />
        </IconButton>
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Youtube Logo"
          />
        </Link>
      </div>
      <div className="header__center">
        <div className="header__center__search-bar">
          <input placeholder="Search" type="text" />
          <div className="header__search-button-wrapper">
            <Tooltip title="Search">
              <SearchOutlinedIcon className="header__search-button" />
            </Tooltip>
          </div>
        </div>
        <Tooltip title="Search with your voice">
          <IconButton>
            <MicIcon className="header__icon" />
          </IconButton>
        </Tooltip>
      </div>
      <div className="header__right">
        <div className="header__right__icon__wrapper">
          <Tooltip title="Create">
            <IconButton>
              <VideoCallOutlinedIcon className="header__icon header__right__icon" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="header__right__icon__wrapper">
          <Tooltip title="Notifications">
            <IconButton>
              <NotificationsNoneOutlinedIcon className="header__icon header__right__icon" />
            </IconButton>
          </Tooltip>
        </div>
        <Avatar
          className="header__avatar"
          src="https://avatars.githubusercontent.com/u/50440569?s=400&u=12820dd139bdcdf6c251d45e879ceafb304cf496&v=4"
          alt="profile picture"
        />
      </div>
    </div>
  );
}

export default Header;
