import React from "react";
import VideoCard from "../group/VideoCard";
import "../../styles/section/RecommendedVideos.css";

function RecommendedVideos({ videoData, sidebarAlt }) {
  return (
    <div
      className={`recommended-videos-container ${
        sidebarAlt ? "sidebarAlt" : ""
      }`}
    >
      {videoData.map((video) => (
        <VideoCard video={video} key={video.title} sidebarAlt={sidebarAlt} />
      ))}
      <a href="https://www.youtube.com/">Link to real Youtube</a>
    </div>
  );
}

export default RecommendedVideos;
