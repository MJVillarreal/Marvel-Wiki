import React from "react";

import CharactersCarousel from "./charactersCarousel";

import styles from "../../styles/home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <CharactersCarousel></CharactersCarousel>
      </div>
    </>
  );
};

export default Home;
