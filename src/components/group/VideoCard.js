import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "../../styles/group/VideoCard.css";
import Skeleton from "@mui/material/Skeleton";
import thumbnailFallback from "../../assets/images/thumbnailFallback.png";
import avatarFallback from "../../assets/images/avatarFallback.jpeg";

const VideoCard = ({ video, sidebarAlt }) => {
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  const {
    thumbnail,
    channelImage,
    title,
    channelName,
    viewCount,
    relativeTime,
  } = video;

  const allImagesLoaded = thumbnailLoaded && avatarLoaded;

  // Handle image fallbacks
  const handleThumbnailError = (e) => {
    e.target.src = thumbnailFallback;
  };
  const handleAvatarError = (e) => {
    e.target.src = avatarFallback;
  };

  return (
    <div className="video-card">
      {!allImagesLoaded && (
        <Skeleton variant="rounded" className="thumbnail-skeleton" />
      )}
      <img
        style={{ display: thumbnailLoaded ? "block" : "none" }}
        className="video-card__thumbnail"
        src={thumbnail}
        alt={`${title} thumbnail`}
        onLoad={() => setThumbnailLoaded(true)}
        onError={handleThumbnailError}
      />

      <div className="video-card__body">
        <div className="video-card__channel-img__container">
          {!avatarLoaded && (
            <Skeleton variant="circular" width={40} height={40} />
          )}
          <Avatar
            src={channelImage}
            alt={`${channelName} channel avatar`}
            style={{ display: avatarLoaded ? "block" : "none" }}
            onLoad={() => setAvatarLoaded(true)}
            onError={handleAvatarError}
          />
        </div>
        <div className="video-card__information__container">
          {!allImagesLoaded ? (
            <>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </>
          ) : (
            <>
              <h4 className="video-card__title">{title}</h4>
              <p className="video-card__channel-name">{channelName}</p>
              <p className="video-card__view-count-timestamp__container">
                {`${viewCount} · ${relativeTime}`}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
