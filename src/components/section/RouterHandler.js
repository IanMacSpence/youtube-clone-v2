import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RouterHandler({ setSearchTerm }) {
  const location = useLocation();

  // Reset search term when navigating away from the search results page
  useEffect(() => {
    if (location.pathname !== "/search") {
      setSearchTerm("");
    }
  }, [location, setSearchTerm]);

  return null; // This component does not render anything
}

export default RouterHandler;
