// React and Router
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/section/Header";
import SideBar from "./components/section/SideBar";
import RecommendedVideos from "./components/section/RecommendedVideos";
import TabBar from "./components/group/TabBar";
import SubscriptionsPage from "./components/section/SubscriptionsPage";
import TrendingPage from "./components/section/TrendingPage";
import LibraryPage from "./components/section/LibraryPage";
import HistoryPage from "./components/section/HistoryPage";
import SearchResults from "./components/section/SearchResults";
import RouterHandler from "./components/section/RouterHandler";

// Custom Styles
import "./App.css";
// Video Data
import videoData from "./data/recommendedVideoData.json";

function App() {
  // Handle state of sidebar
  const [sidebarAlt, setSidebarAlt] = useState(false);
  const toggleSidebar = () => {
    setSidebarAlt(!sidebarAlt);
  };
  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchBarChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Search result text displayed on search results page. Need separate to search
  const [searchResultText, setSearchResultText] = useState("");

  // Selected sidebar row
  const [selectedSideBarRow, setSelectedSideBarRow] = useState("/");
  const handleSelectedSideBarRow = (path) => {
    setSelectedSideBarRow(path);
    if (sidebarAlt && window.innerWidth < 1314) {
      setSidebarAlt(false);
    }
  };
  return (
    <div className="app">
      <Router>
        <RouterHandler setSearchTerm={setSearchTerm} />
        <Header
          toggleSidebar={toggleSidebar}
          handleSearchBarChange={handleSearchBarChange}
          handleSelectedSideBarRow={handleSelectedSideBarRow}
          searchTerm={searchTerm}
          setSearchResultText={setSearchResultText}
        />
        <main className="app__page">
          <SideBar
            sidebarAlt={sidebarAlt}
            selectedSideBarRow={selectedSideBarRow}
            handleSelectedSideBarRow={handleSelectedSideBarRow}
          />
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className={`main-content ${sidebarAlt ? "sidebarAlt" : ""}`}
                >
                  <TabBar />
                  <RecommendedVideos
                    videoData={videoData}
                    sidebarAlt={sidebarAlt}
                  />
                  {/* pass video data as a prop to RecommendedVideos component */}
                </div>
              }
            />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route
              path="/search"
              element={<SearchResults searchResultText={searchResultText} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

/*
> Make responsive and mobile friendly
*/

/*
> make the show more dropdown drop and display some playlists
*/
