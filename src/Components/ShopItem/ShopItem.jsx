/** @format */
import { useContext } from "react";
import React from "react";
import "./ShopItem.css";

import { AppContext } from "../../App";
const ShopItem = ({ game, index }) => {

    const {bag ,setBag} = useContext(AppContext);
    const handleRemovefrombag = (game) =>{
        setBag(bag.filter((g) => g._id!== game._id));
  
    }
  return (
    <tr className='shopBagItem'>
      <th scope='row'>{index + 1}</th>
      <td>
        <img src={game.img} alt='' className='img-fluid' />
      </td>
      <td>{game.title}</td>
      <td>${game.price.toFixed(2)}</td>
      <td>{game.discount * 100}%</td>
      <td>${((1 - game.discount) * game.price).toFixed(2)}</td>
      <td>
        {" "}
        <a href='#' onClick={()=>{handleRemovefrombag(game)}}>
          <i className='bi bi-trash'></i>
        </a>
      </td>
    </tr>
  );
};

export default ShopItem;
