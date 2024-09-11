import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "../../assets/slick.css";
import "../../assets/slick-theme.css";

import CharacterCard from "../../components/charactersCarousel/characterCard";
import data from "../../data/characters.json"

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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((character) => (
          <div key={character.id}>
            <Link to={`/character/${character.id}`}>
              <CharacterCard
                imgId={character.imgId}
                name={character.name}
                aka={character.aka}
                description={character.description}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CharactersCarousel;
