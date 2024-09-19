import React from "react";
import styles from "../../styles/movieCard.module.css";

import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const BASE_URL = "https://drive.google.com/thumbnail";

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return { fullStars, hasHalfStar, emptyStars };
};

const MovieRating = ({ rating, starColor = "#F0131E" }) => {
  const { fullStars, hasHalfStar, emptyStars } = getStars(rating);

  return (
    <div>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <GradeIcon key={`full-${index}`} sx={{ color: starColor }} />
        ))}
      {hasHalfStar && <StarHalfIcon sx={{ color: starColor }} />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <StarOutlineIcon key={`empty-${index}`} sx={{ color: starColor }} />
        ))}
    </div>
  );
};

const MovieCard = ({ title, summary, release, duration, poster, rating }) => {
  const imageUrl = (posterId) => `${BASE_URL}?id=${posterId}&sz=w1000-h1000`;

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieDetails}>
        <h2>{title}</h2>
        <p>{summary}</p>
        <div className={styles.info}>
          <div className={styles.detail}>
            <h3>RATING</h3>
            <MovieRating rating={rating} />
          </div>
          <div className={styles.detail}>
            <h3>RELEASE DATE</h3>
            <p>{release}</p>
          </div>
          <div className={styles.detail}>
            <h3>DURATION</h3>
            <p>{duration}</p>
          </div>
        </div>
      </div>
      <div className={styles.movieImageContainer}>
        <img src={imageUrl(poster)} alt={title} className={styles.movieImage} />
      </div>
    </div>
  );
};

export default MovieCard;