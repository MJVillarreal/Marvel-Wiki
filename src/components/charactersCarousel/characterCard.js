import React from "react";

import styles from "../../styles/characterCard.module.css";

const BASE_URL = "https://drive.google.com/thumbnail";

const CharacterCard = ({ imgId, name, aka, description }) => {
  const imageUrl = (imgId) => `${BASE_URL}?id=${imgId}`;

  return (
    <div className={styles.characterCard}>
      <div className={styles.characterDetails}>
        <h3>{name}</h3>
        {aka && <p className={styles.characterAka}>AKA: {aka}</p>}
        <p className={styles.characterDescription}>{description}</p>
      </div>
      <div className={styles.characterImageContainer}>
        <img
          src={imageUrl(imgId)}
          alt={name}
          className={styles.characterImage}
        />
      </div>
    </div>
  );
};

export default CharacterCard;
