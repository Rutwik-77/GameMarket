/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/** @format */

import "./Navlist.css";
const NavlistItem = ({ item, navOnClick }) => {
  return (
    <li>
      <a href='#' className={`${item.active ? "active" :undefined}`} onClick={()=>navOnClick(item._id ,item.target)}>
        <i className={item.icon}></i>
        <span className='navName'>{item.name}</span>
      </a>
    </li>
  );
};

export default NavlistItem;
