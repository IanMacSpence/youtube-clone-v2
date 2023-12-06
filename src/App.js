// React and Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/section/Header";
import SideBar from "./components/section/SideBar";
import RecommendedVideos from "./components/section/RecommendedVideos";
import TabBar from "./components/group/TabBar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="app__page">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<RecommendedVideos />} />
          </Routes>
        </main>
      </Router>

      {/* SubjectBar */}

      {/* subs */}
      {/* explore */}
      {/* more from youtube */}
      {/* settings, report, help, send feedback */}
      {/* copyright */}
      {/* <RecommendedVideos /> */}
    </div>
  );
}

export default App;

/*
> make other sections of sidebar
> make subject bar
> Make responsive and mobile friendly
> hover over header icons
> header hamburger must change the sidebar. Probably an entirely different component
> show more dropdown
> I don't really like how the search bar has a blue box in it when active
> better loading of images, grey out, lazy load
> Scroll to bottom of page calls more videos
*/

/*
> Search results could be fakes like recommended. I would try to Make it say "Search results for <searchTerm>" at the top to show some additional functionality and state
> Trending could be like the originals page. It would be nice to make this to display a different way to display the videos with the horizontal scroll
> make the show more dropdown drop and display some playlists
> make the sidebar sticky and scrollable
*/
