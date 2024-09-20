import React from "react";
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "../../assets/slick.css";
import "../../assets/slick-theme.css";

import styles from "../../styles/moviesCarousel.module.css";

import data from "../../data/movies.json";

const BASE_URL = "https://drive.google.com/thumbnail";

const MoviesCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 40,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1600, 
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 1366, 
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1100, 
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 750, 
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500, 
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 400, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 250, 
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  const imageUrl = (posterId) => `${BASE_URL}?id=${posterId}`;

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings} className={styles.slider}>
        {data.map((movie) => (
          <div key={movie.id} className={styles.moviePosterContainer }>
            <Link to={`/movie/${movie.id}`} className={styles.movieLink}>
              <img
                src={imageUrl(movie.poster)}
                alt={movie.title}
                className={styles.moviePoster}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoviesCarousel;
