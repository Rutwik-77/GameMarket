/* eslint-disable react/prop-types */
/** @format */

import { useState } from "react";
import "./Sidemenu.css";
import NavlistItem from "../Navlist/NavlistItem";
import navListData from "../Data/Navlistdata";
import SocialItems from "../SocialItems/SocialItems";
import SocialLIst from "../SocialItems/SocialLIst";

const SIdemenu = ({ active, sectionActive }) => {
  const [navData, setNavData] = useState(navListData);
  const [socialList, setSocialList] = useState(SocialLIst);

  const handleNavOnClick = (id,target) => {
    
    const newNavData = navData.map(nav => {
      nav.active = false;
      if (nav._id === id) {
        nav.active = true;
        return nav;
      }
    });
    setNavData(newNavData);
    sectionActive(target)
  };

  return (
    <div className={`sideMenu ${active ? "active" : undefined}`}>
      <a href='#' className='logo'>
        <i className='bi bi-controller'></i>
        <span className='brand'>Play</span>
      </a>
      <ul className='nav'>
        {navData.map((item) => (
          <NavlistItem
            key={item.id}
            item={item}
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>

      {/* Add your custom content here */}
      <ul className='social'>
        {socialList.map((item) => (
          <SocialItems key={item.id} item={item} />
        ))}
        <li>
          <a href='#' className='share'>
            <i className='bi bi-share'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SIdemenu;
