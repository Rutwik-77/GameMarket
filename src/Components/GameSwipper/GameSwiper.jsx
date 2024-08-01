/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/** @format */
import { useState } from "react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
// import Swiper and modules styles
import {Swiper,SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./GameSwiper.css";



const GameSwiper = ({games}) => {
  const [active, setactive] = useState(false);

  const handleToggleVide = () => {
    setactive(!active);
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      spaceBetween={30}
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
      navigation={true}
      coverflowEffect={{ 
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className='gameSwiper'
    >
      {games.map((game) => (
        <SwiperSlide key={game._id}>
          <div className='gameSlider'>
            <img src={game.img} alt='Game Image' />
            <div className={`video ${active ? "active" :undefined}`}>
                <iframe
                 width="1280"
                 height="720"
                 src={game.trailer}
                 title={game.title}
                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                 allowFullScreen
                ></iframe>
  
            </div>
            <div className='content'>
              <h2>{game.title}</h2>
              <p>{game.description}</p>
              <div className='buttons'>
                <a href='#' className='orderbtn'>
                  Order Now
                </a>
                <a
                  href='#'
                  className={`playBtn ${active ? "active" : undefined}`}
                  onClick={handleToggleVide}
                >
                  <span className='pause'>
                    <i className='bi bi-pause-fill'></i>
                  </span>
                  <span className='play'>
                    <i className='bi bi-play-fill'></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GameSwiper;
