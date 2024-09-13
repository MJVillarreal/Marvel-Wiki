import React from "react";

import MoviesCarousel from "./moviesCarousel";
import CharactersCarousel from "./charactersCarousel";
import StonesCarousel from "./stonesCarousel";

// import styles from "../../styles/home.module.css";

const Home = () => {
  return (
    <>
      <div>
        <MoviesCarousel/>
        <CharactersCarousel />
        <StonesCarousel />
      </div>
    </>
  );
};

export default Home;
