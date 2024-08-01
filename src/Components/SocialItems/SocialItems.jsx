/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import "./SocialItem.css";
const SocialItems = ({ item }) => {
  return (
    <li>
      <a href='#'>
        <i className={item.icon}></i>
      </a>
    </li>
  );
};

export default SocialItems;
