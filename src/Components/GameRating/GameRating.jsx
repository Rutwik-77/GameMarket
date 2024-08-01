/* eslint-disable react/prop-types */
/** @format */

import "./GameRating.css";
import { useState,useEffect } from "react";
const GameRating = ({ rating }) => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    let starArray = [];
    if (rating > 5 || rating < 1) {
      return;
    }
    for (let i = 0; i < rating; i++) {
      starArray.push(i);
    }
    return starArray;
  };

  useEffect(() => {
    setStars (generateStars());
  }, [])
  

  return <div className='gameRating'>
    {

        stars.map((star,index) =>(
            <i key={index} className='bi bi-star-fill'></i>
        ))
    }
  </div>;
};

export default GameRating;
