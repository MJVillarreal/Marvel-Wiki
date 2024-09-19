import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/characterCard.module.css";

import EastIcon from "@mui/icons-material/East";

const BASE_URL = "https://drive.google.com/thumbnail";

const CharacterCard = ({ imgId, name, description, id }) => {
  const imageUrl = (imgId) => `${BASE_URL}?id=${imgId}&sz=w1000-h1000`;

  return (
    <div className={styles.characterCard}>
      <div className={styles.characterDetails}>
        <h3>{name}</h3>
        <p className={styles.characterDescription}>{description}</p>
        <Link to={`/character/${id}`} className={styles.learnMoreButton}>
          LEARN MORE
          <EastIcon className={styles.learnMoreArrow} />
        </Link>
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
