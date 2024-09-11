import React from "react";

import Slider from "react-slick";
import "../../assets/slick.css";
import "../../assets/slick-theme.css";
import styles from "../../styles/characterCarousel.module.css";

import CharacterCard from "../../components/charactersCarousel/characterCard";
import data from "../../data/characters.json";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const CharactersCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings} className={styles.slider}>
        {data.map((character) => (
          <div key={character.id}>
            <CharacterCard
              id={character.id}
              imgId={character.imgId}
              name={character.name}
              aka={character.aka}
              description={character.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CharactersCarousel;
