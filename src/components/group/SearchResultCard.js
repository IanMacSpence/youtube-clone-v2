import React from "react";
import Avatar from "@mui/material/Avatar";
import "../../styles/group/SearchResultCard.css";

const SearchResultCard = ({ video }) => {
  const {
    thumbnailUrl,
    avatarUrl,
    title,
    views,
    relativeTime,
    isNew,
    channelName,
    channelDescription,
    isChannelVerified,
    hasSubtitles,
  } = video;
  return (
    <div className="search-result-card">
      <img
        className="search-card__thumbnail"
        src={thumbnailUrl}
        alt={`${title} thumbnail`}
      />
      <div className="search-card__info">
        <h4 className="search-card__title">{title}</h4>
        <p className="search-card__views-timestamp">
          {views} · {relativeTime}
        </p>
        <div className="search-card__channel">
          <div className="search__avatar-wrapper">
            <Avatar
              className="search-card__avatar"
              src={avatarUrl}
              alt={`${channelName} channel avatar`}
            />
          </div>
          <p className="search-card__channel-name">{channelName}</p>
          {/* channel tag like verified */}
        </div>
        <p className="search-card__channel-description">{channelDescription}</p>
        {/* video tag like new and subtitles */}
      </div>
    </div>
  );
};

export default SearchResultCard;

/*
thumbnail
title
views and timestamp
channel avatar and name and verified
channel description
tag
*/
