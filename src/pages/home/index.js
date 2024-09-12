import React from "react";

import MoviesCarousel from "./moviesCarousel";
import CharactersCarousel from "./charactersCarousel";

// import styles from "../../styles/home.module.css";

const Home = () => {
  return (
    <>
      <div>
        <MoviesCarousel/>
        <CharactersCarousel />
      </div>
    </>
  );
};

export default Home;
