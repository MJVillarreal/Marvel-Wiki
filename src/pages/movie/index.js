import React from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/movie.module.css"

import Custom404 from "./custom404";
import data from "../../data/movies.json";

import MovieCard from "../../components/moviePage/moviecard";

const Movie = () => {
  const { id } = useParams();
  const movie = data.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <Custom404 />;
  }

  return (
    <div className={styles.movieContainer}>
      <MovieCard
        id={movie.id}
        title={movie.title}
        summary={movie.summary}
        release={movie.release}
        duration={movie.duration}
        poster={movie.poster}
        rating={movie.rating}
      />
    </div>
  );
};

export default Movie;
