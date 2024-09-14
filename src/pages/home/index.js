import React from "react";

import MoviesCarousel from "./moviesCarousel";
import CharactersCarousel from "./charactersCarousel";
// import StonesCarousel from "./stonesCarousel";

const Home = () => {
  return (
    <>
      <div>
        <MoviesCarousel/>
        <CharactersCarousel />
        {/* <StonesCarousel /> */}
      </div>
    </>
  );
};

export default Home;
