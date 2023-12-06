import React from "react";
import "../../styles/group/SideBarRow.css";
import { Link } from "react-router-dom";

const SideBarRow = ({ iconColor, selected, Icon, title, link }) => {
  return (
    <Link to={link}>
      <div className={`sidebar__row ${selected && "sidebar__row--selected"}`}>
        <Icon
          className={`sidebar__row__icon ${
            selected && "sidebar__row__icon--selected"
          }`}
          style={{ color: iconColor }}
        />
        <h2
          className={`sidebar__row__title ${
            selected && "sidebar__row__title--selected"
          }`}
        >
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default SideBarRow;
