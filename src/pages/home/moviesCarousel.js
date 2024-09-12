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
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 40,
    cssEase: "linear",
    arrows: false,
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
