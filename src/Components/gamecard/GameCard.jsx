/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/**
 * eslint-disable react/prop-types
 *
 * @format
 */
import { useContext } from "react";
import "./GameCard.css";
import GameRating from "../GameRating/GameRating";

import { AppContext } from "../../App";
const GameCard = ({ game }) => {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);


  // Library Section Functions
  const HandleAddtoLibrary = (game) => {
    setLibrary([...library, game]);
  };

  const HandleRemoveFromLibrary = (game) => {
    setLibrary(library.filter((g) => g._id !== game._id));
  };


  //Bag Section Functions
  const HandleAddtoBag = (game) => {
    if (bag.includes(game)) return {
      
    }
    setBag([...bag, game]);
  };

  return (
    <div className='col-xl-3 col-lg-4 col-md-6'>
      <div className='GameCard'>
        <img src={game.img} alt={game.title} className='img-fluid' />
        <a
          href='#'
          className={`like ${library.includes(game) ? "active" : undefined}`}
          onClick={
            library.includes(game)
              ? () => HandleRemoveFromLibrary(game)
              : () => HandleAddtoLibrary(game)
          }
        >
          <i className='bi bi-heart-fill'></i>
        </a>
        <div className='gamefeatures'>
          <span className='gametype'>{game.level}</span>
          <GameRating rating={game.rating}></GameRating>
        </div>
        <div className='gametitle mt-4 mb-3'>{game.title}</div>
        <div className='gameprice'>
          {game.discount != 0 && (
            <>
              <span className='discount'>
                <i>{game.discount * 100}%</i>
              </span>
              <span className='Prevprice'>${game.price.toFixed(2)}</span>
            </>
          )}
          <span className='currentprice'>
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a href='#' className='addbag' onClick={()=>HandleAddtoBag(game)}>
          <i className='bi bi-bag-plus-fill'></i>
        </a>
      </div>
    </div>
  );
};

export default GameCard;
