// React and Router
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// CSS
import "../../styles/section/Header.css";
// MUI icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MicIcon from "@mui/icons-material/Mic";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

// MUI components
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

// Components
import SearchBar from "../group/SearchBar";

// Images
import profilePicture from "../../assets/images/profile-picture.png";
import avatarFallback from "../../assets/images/avatarFallback.jpeg";

function Header({
  toggleSidebar,
  handleSearchBarChange,
  handleSelectedSideBarRow,
  searchTerm,
  setSearchResultText,
}) {
  // Handle image fallbacks
  const handleAvatarError = (e) => {
    e.target.src = avatarFallback;
  };
  // Search button click, useNavigate hook,
  // set selected sidebar row to blank and set searchResultText
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setSearchResultText(searchTerm.trim());
      handleSelectedSideBarRow("");
      setMobileSearchBar(false);
      navigate("/search");
    }
  };
  // Search Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  // Handle search bar display on mobile
  const [showMobileSearchBar, setMobileSearchBar] = useState(false);
  const toggleMobileSearch = () => {
    setMobileSearchBar(!showMobileSearchBar);
  };

  return (
    <div className="header">
      {showMobileSearchBar ? (
        <div className="mobile-search-header">
          <Tooltip title="back" className="mobile-search-header-back-icon">
            <IconButton onClick={toggleMobileSearch}>
              <ArrowBackOutlinedIcon className="header__icon" />
            </IconButton>
          </Tooltip>
          <SearchBar
            searchTerm={searchTerm}
            handleSearchBarChange={handleSearchBarChange}
            handleSearch={handleSearch}
            handleKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <>
          <div className="header__left">
            <IconButton onClick={toggleSidebar}>
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
            <SearchBar
              searchTerm={searchTerm}
              handleSearchBarChange={handleSearchBarChange}
              handleSearch={handleSearch}
              handleKeyDown={handleKeyDown}
            />
            <Tooltip
              title="Search with your voice"
              className="voice-search-icon"
            >
              <IconButton>
                <MicIcon className="header__icon" />
              </IconButton>
            </Tooltip>
          </div>

          <div className="header__right">
            {/* MOBILE SEARCH BTN */}
            <div className="header__right__icon__wrapper">
              <Tooltip
                title="Search"
                className="header__search-button-wrapper-mobile"
              >
                <IconButton onClick={toggleMobileSearch}>
                  <SearchOutlinedIcon className="header__search-button" />
                </IconButton>
              </Tooltip>
            </div>
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
              src={profilePicture}
              alt="profile picture"
              onError={handleAvatarError}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
