import React from "react";
import Avatar from "@mui/material/Avatar";
import "../../styles/group/VideoCard.css";

const VideoCard = ({ video }) => {
  const {
    thumbnail,
    channelImage,
    title,
    channelName,
    viewCount,
    relativeTime,
  } = video;
  return (
    <div className="video-card">
      <img
        className="video-card__thumbnail"
        src={thumbnail}
        alt={`${title} thumbnail`}
      />
      <div className="video-card__body">
        <div className="video-card__channel-img__container">
          <Avatar src={channelImage} alt={`${channelName} channel avatar`} />
        </div>
        <div className="video-card__information__container">
          <h4 className="video-card__title">{title}</h4>
          <p className="video-card__channel-name">{channelName}</p>
          <p className="video-card__view-count-timestamp__container">
            {`${viewCount} · ${relativeTime}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
