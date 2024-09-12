import React from "react";

import { useParams } from "react-router-dom";

import Custom404 from "./custom404";
import data from "../../data/movies.json";

const BASE_URL = "https://drive.google.com/thumbnail";

const Movie = () => {
  const { id } = useParams();
  const movie = data.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <Custom404 />;
  }

  const imageUrl = (posterId) => `${BASE_URL}?id=${posterId}`;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={imageUrl(movie.poster)} alt={movie.title} />
    </div>
  );
};

export default Movie;