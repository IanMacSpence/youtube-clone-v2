// CSS
import "../../styles/section/Header.css";
// MUI icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// MUI components
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function searchBar({
  searchTerm,
  handleSearchBarChange,
  handleSearch,
  handleKeyDown,
}) {
  return (
    <div className="header__center__search-bar">
      <input
        placeholder="Search"
        value={searchTerm}
        type="text"
        onChange={handleSearchBarChange}
        onKeyDown={handleKeyDown}
      />
      <div className="header__search-button-wrapper">
        <Tooltip title="Search">
          <IconButton className="header__search-button">
            <SearchOutlinedIcon
              className="header__search-button-icon"
              onClick={handleSearch}
            />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default searchBar;
