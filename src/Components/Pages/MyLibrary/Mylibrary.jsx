/* eslint-disable react/prop-types */
/** @format */

import "./MyLibrary.css";
import GameCard from "../../gamecard/GameCard";
const Mylibrary = ({ games, refrence }) => {
  return (
    <section id='library' className='library' ref={refrence}>
      <div className='container-fluid'>
        <div className='row mb-3'>
    
        </div>
        <div className="row">
          {
              games.length === 0 ? (
                <h2>Your Library is Empty</h2>
              ): (
                games.map(game=><GameCard key={game._id} game={game}/>)
              )

          }
        </div>
      </div>
    </section>
  );
};

export default Mylibrary;
