import React from "react";
import "../../styles/section/SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import videoData from "../../data/searchVideoData.json";
import SearchResultCard from "../group/SearchResultCard";

const SearchPage = ({ searchInput }) => {
  return (
    <div className="search-page">
      <div className="search-page__filter-bar">
        <div className="search-page__filter">
          <span>Filters</span>
          <TuneOutlinedIcon />
        </div>
      </div>
      <hr />
      <h2 className="search-page__header">
        Search Results for "{searchInput}"
      </h2>
      <div className="search-page__container">
        {videoData.map((video) => (
          <SearchResultCard video={video} key={video.title} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
