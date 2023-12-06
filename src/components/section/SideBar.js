import React from "react";
import { Link } from "react-router-dom";
import SideBarRow from "../group/SideBarRow";
import "../../styles/section/SideBar.css";
// MUI icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
// Explore
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
// More from YouTube
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Settings etc
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__section sidebar__home">
        <SideBarRow selected Icon={HomeOutlinedIcon} title="Home" link="/" />
        <SideBarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
        <SideBarRow Icon={WhatshotOutlinedIcon} title="Trending" />
      </div>
      <hr />
      <div className="sidebar__section sidebar__personal">
        <SideBarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
        <SideBarRow Icon={HistoryOutlinedIcon} title="History" />
        <SideBarRow Icon={SmartDisplayOutlinedIcon} title="Your videos" />
        <SideBarRow Icon={AccessTimeOutlinedIcon} title="Watch later" />
        <SideBarRow Icon={DownloadOutlinedIcon} title="Downloads" />
        <SideBarRow Icon={ThumbUpOutlinedIcon} title="Liked videos" />
        <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      </div>
      <hr />
      <div className="sidebar__section sidebar__explore">
        <h4>Explore</h4>
        <SideBarRow Icon={MusicNoteOutlinedIcon} title="Music" />
        <SideBarRow Icon={SportsEsportsOutlinedIcon} title="Gaming" />
        <SideBarRow Icon={FeedOutlinedIcon} title="News" />
        <SideBarRow Icon={EmojiEventsOutlinedIcon} title="Sports" />
      </div>
      <hr />
      <div className="sidebar__section sidebar__more">
        <h4>More from YouTube</h4>
        <SideBarRow
          iconColor="red"
          Icon={PlayCircleIcon}
          title="YouTube Studio"
        />
        <SideBarRow
          iconColor="red"
          Icon={LibraryMusicIcon}
          title="YouTube Music"
        />
        <SideBarRow iconColor="red" Icon={YouTubeIcon} title="YouTube Kids" />
      </div>
      <hr />
      <div className="sidebar__section sidebar__user-support">
        <SideBarRow Icon={SettingsOutlinedIcon} title="Settings" />
        <SideBarRow Icon={FlagOutlinedIcon} title="Report history" />
        <SideBarRow Icon={HelpOutlineOutlinedIcon} title="Help" />
        <SideBarRow Icon={FeedbackOutlinedIcon} title="Send feedback" />
      </div>
    </div>
  );
}

export default SideBar;
