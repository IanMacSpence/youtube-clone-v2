import React from "react";
import VideoCard from "../group/VideoCard";
import "../../styles/section/RecommendedVideos.css";
import videoData from "../../data/recommendedVideoData.json";

function RecommendedVideos() {
  return (
    <div className="recommended-videos-container">
      {videoData.map((video) => (
        <VideoCard video={video} key={video.title} />
      ))}
    </div>
  );
}

export default RecommendedVideos;
