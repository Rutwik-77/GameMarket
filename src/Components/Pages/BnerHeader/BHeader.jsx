/** @format */
import { useContext } from "react";
import { AppContext } from "../../../App";
import "./BHeader.css";
import userimg from '/images/men.jpg';
const BHeader = ({ToggleActive ,games}) => {
  const {library, bag} = useContext(AppContext);
  return (
    <header className='b-header'>
      <a href='#' className='menu' onClick={ToggleActive}>
        <i className='bi bi-sliders'></i>
      </a>
      <div className='usereItems'>
        <a href='#' className='icon'>
          <i className='bi bi-heart-fill'></i>
          <span className='like'>{library.length}</span>
        </a>
        <a href='#' className='icon'>
          <i className='bi bi-bag-fill'></i>
          <span className='bag'>{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="#"><img src={userimg} alt="User image" /></a>
          <div className="user">
            <span>UserName</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BHeader;
