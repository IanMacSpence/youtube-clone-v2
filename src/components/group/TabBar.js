import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// CSS
import "../../styles/section/TabBar.css";

const TabBar = () => {
  // value, setValue and handleChange are used to update the style of the active tab to show that it's active
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      className="tabbar"
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable auto tabs example"
    >
      <Tab label="All" />
      <Tab label="History" />
      <Tab label="Podcasts" />
      <Tab label="Gaming" />
      <Tab label="Live" />
      <Tab label="Music" />
      <Tab label="Mixes" />
      <Tab label="Debates" />
      <Tab label="Squash" />
      <Tab label="Superhero Movies" />
      <Tab label="Series" />
      <Tab label="Sport" />
      <Tab label="Wildlife" />
      <Tab label="Travel" />
      <Tab label="Politics" />
      <Tab label="History" />
      <Tab label="Podcasts" />
      <Tab label="Gaming" />
      <Tab label="Live" />
      <Tab label="Music" />
      <Tab label="Mixes" />
      <Tab label="Debates" />
      <Tab label="Squash" />
      <Tab label="Superhero Movies" />
      <Tab label="Series" />
      <Tab label="Sport" />
      <Tab label="Wildlife" />
      <Tab label="Travel" />
      <Tab label="Politics" />
    </Tabs>
  );
};

export default TabBar;
