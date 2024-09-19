import React from "react";

import { useParams } from "react-router-dom";

import Custom404 from "./custom404";
import data from "../../data/characters.json";

import styles from "../../styles/character.module.css";

const BASE_URL = "https://drive.google.com/thumbnail";

const Character = () => {
  const { id } = useParams();
  const character = data.find((character) => character.id === parseInt(id));

  if (!character) {
    return <Custom404 />;
  }

  const imageUrl = (imgId) => `${BASE_URL}?id=${imgId}&sz=w1000-h1000`;

  return (
    <div className={styles.characterContainer}>
      <div className={styles.title}>
        <h1>{character.aka}</h1>
        <p>{character.name}</p>
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.firstColumn}>
          <img src={imageUrl(character.charImg1)} alt={character.name} />
          <img src={imageUrl(character.charImg2)} alt={character.name} />
          <img src={imageUrl(character.charImg3)} alt={character.name} />
        </div>
        <div className={styles.secondColumn}>
          <p
            dangerouslySetInnerHTML={{
              __html: character.story.replace(/\n/g, "<br/>"),
            }}
          />
        </div>
        <div className={styles.thirdColumn}>
          <img src={imageUrl(character.charImg4)} alt={character.name} />
          <img src={imageUrl(character.charImg5)} alt={character.name} />
          <img src={imageUrl(character.charImg6)} alt={character.name} />
        </div>
      </div>
    </div>
  );
};

export default Character;
