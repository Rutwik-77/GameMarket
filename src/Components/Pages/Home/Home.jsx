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

import "./Home.css";
import GameSwiper from "../../GameSwipper/GameSwiper";
import GameCard from "../../gamecard/GameCard";

const Home = ({ games, refrence }) => {
  return (
    <section id='home' className='home active' ref={refrence}>
      <div className='container-fluid'>
        <div className='row'>
          <GameSwiper games={games}></GameSwiper>
        </div>
        <div className='row mb-4 mt-4 paradiv'>
          <div className='col-lg-6 viewmore'>
            <h2 className='sectiontitle'>Games on Promotion</h2>
          </div>
          <div className='col-lg-6 d-flex justify-content-end'>
            <a href='#' className='viewmore1'>
              view more games <i className='bi bi-arrow-right'></i>
            </a>
          </div>
        </div>
        <div className='row'>
          {games.slice(0, 4).map((game) => (
            <GameCard key={games._id} game={game}></GameCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
