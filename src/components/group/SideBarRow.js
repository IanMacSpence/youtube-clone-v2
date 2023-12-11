import React from "react";
import "../../styles/group/SideBarRow.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

const SideBarRow = ({
  iconColor,
  selected,
  Icon,
  title,
  link,
  isCondensedRow,
  onClick,
}) => {
  return (
    <Link
      to={link}
      className={classNames(
        "sidebar__row",
        { "sidebar__row--selected": selected },
        { isCondensedRow: isCondensedRow }
      )}
      onClick={onClick}
    >
      <Icon
        className={classNames("sidebar__row__icon", {
          "sidebar__row__icon--selected": selected,
        })}
        style={{ color: iconColor }}
      />
      <h2
        className={classNames("sidebar__row__title", {
          "sidebar__row__title--selected": selected,
        })}
      >
        {title}
      </h2>
    </Link>
  );
};

export default SideBarRow;

// import classNames from 'classnames';
