import React from "react";

import { useParams } from "react-router-dom";

import Custom404 from "./404";
import data from "../data/characters.json";

const BASE_URL = "https://drive.google.com/thumbnail";

const Character = () => {
  const { id } = useParams();
  const character = data.find((character) => character.id === parseInt(id));

  if (!character) {
    return <Custom404/>;
  }

  const imageUrl = (imgId) => `${BASE_URL}?id=${imgId}`;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>
        Aka:{" "}
        {Array.isArray(character.aka)
          ? character.aka.join(", ")
          : character.aka}
      </p>
      <img src={imageUrl(character.imgId)} alt={character.name} />
    </div>
  );
};

export default Character;
