/* eslint-disable react/prop-types */
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

import { useState } from "react";
import "./Ctegories.css";
import filterListData from "../../Data/filterListData";
import GameCard from "../../gamecard/GameCard";
const Categories = ({ games, refrence }) => {
  const [filters, setFilters] = useState(filterListData);
  const [data, setData] = useState(games);

  const HandleFilterGames = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );
    if (category === "All") {
      setData(games);
      return;
    }
    setData(games.filter((game) => game.category === category));
  };

  const [text, setText] = useState("");

  const HandleSeacrhGAmes = (e) => {
  setData( games.filter(game=>game.title.toLowerCase().includes(e.target.value.toLowerCase())))
    setText(e.target.value);
    // setData(games.filter((game) => game.name.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  return (
    <section id='categories' className='categories' ref={refrence}>
      <div className='container-fluid mt-2'>
        <div className='row'>
          <div className='col-lg-9'>
            <ul className='filters'>
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? "active" : ""}`}
                  onClick={() => HandleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='col-lg-2'>
            <div className='search'>
              <i className='bi bi-search'></i>
              <input
                type='text'
                name='search'
                value={text}
                placeholder='Search game...'
                onChange={HandleSeacrhGAmes}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          {data.map((game) => (
            <GameCard key={game._id} game={game}></GameCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
