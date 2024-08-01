/** @format */

import "./Page.css";
import SIdemenu from "../Sidemenu/SIdemenu";
import BHeader from "./BnerHeader/BHeader";
import Home from "./Home/Home";
import Categories from "./Categories/Categories";
import Mylibrary from "./MyLibrary/Mylibrary";
import Mybag from "./Mybag/Mybag";
import { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../../App";

const Page = () => {
  const { library, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const CatRef = useRef();
  const Libarry = useRef();
  const bagRef = useRef();
  const sections = [
    { name: "home", ref: homeRef, active: true },
    { name: "categories", ref: CatRef, active: false },
    { name: "library", ref: Libarry, active: false },
    { name: "bag", ref: bagRef, active: false },
  ];

  const HandleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionsActive = (target) => {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
  };

  const fetchData = () => {
    fetch("http://localhost:5173/api/gamesData.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main'>
      <SIdemenu active={active} sectionActive={handleSectionsActive}></SIdemenu>
      <div className={`banner ${active ? "active" : ""}`}>
        <BHeader ToggleActive={HandleToggleActive} games={library,bag}></BHeader>
        <div className='container-fluid'>
          {games && games.length > 0 && (
            <>
              <Home games={games} refrence={homeRef}></Home>
              <Categories games={games} refrence={CatRef}></Categories>
              <Mylibrary games={library} refrence={Libarry}></Mylibrary>
              <Mybag games={bag} refrence={bagRef}></Mybag>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
