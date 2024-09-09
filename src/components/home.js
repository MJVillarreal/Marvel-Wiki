import React from "react";

import { Link } from "react-router-dom";

import styles from "../styles/home.module.css";
import data from "../data/characters.json";

const BASE_URL = "https://drive.google.com/thumbnail";

const Home = () => {
  const imageUrl = (imgId) => `${BASE_URL}?id=${imgId}`;

  return (
    <div className={styles.homeContainer}>
      {data.map((item) => (
        <div key={item.id}>
          <h2>
            <Link to={`/character/${item.id}`}>{item.name}</Link>
          </h2>
          <p>Aka: {Array.isArray(item.aka) ? item.aka.join(", ") : item.aka}</p>
          <img src={imageUrl(item.imgId)} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
