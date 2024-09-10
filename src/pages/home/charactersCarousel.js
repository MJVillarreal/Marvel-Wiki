import React from "react";

import { Link } from "react-router-dom";

import data from "../../data/characters.json";

const BASE_URL = "https://drive.google.com/thumbnail";

const CharactersCarousel = () => {
  const imageUrl = (imgId) => `${BASE_URL}?id=${imgId}`;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>
            <Link to={`/character/${item.id}`}>{item.name}</Link>
          </h2>
          <Link to={`/character/${item.id}`}>
            <img src={imageUrl(item.imgId)} alt={item.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CharactersCarousel;
