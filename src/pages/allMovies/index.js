import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import styles from "../../styles/allMovies.module.css";

import data from "../../data/movies.json";

const BASE_URL = "https://drive.google.com/thumbnail";

const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: "var(--secondary-color)",
          backgroundColor: "var(--text-color)",
          "&.Mui-selected": {
            backgroundColor: "var(--primary-color)",
            color: "var(--text-color)",
            "&:hover": {
              backgroundColor: "#F0131E",
            },
          },
          "&:hover": {
            backgroundColor: "#F0131E", 
            color: "#fff",
          },
          margin: "0 0.5rem",
          border: "1px solid rgba(255, 255, 255, 0.23)",
          transition: "background-color 0.3s ease",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        },
      },
    },
  },
});

const AllMovies = () => {
  const [selectedPhase, setSelectedPhase] = useState("all");

  const handlePhaseChange = (event, newPhase) => {
    setSelectedPhase(newPhase || "all");
  };

  const filteredMovies =
    selectedPhase === "all"
      ? data
      : data.filter((movie) => movie.phase === parseInt(selectedPhase));

  const imageUrl = (posterId) => `${BASE_URL}?id=${posterId}&sz=w1000-h1000`;

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.moviesPage}>
        <div className={styles.toggleButtonGroupWrapper}>
          <ToggleButtonGroup
            value={selectedPhase}
            exclusive
            onChange={handlePhaseChange}
            aria-label="movies phase filter"
            className={styles.toggleButtonGroup}
          >
            <ToggleButton value="all" className={styles.toggleButton}>
              All Movies
            </ToggleButton>
            <ToggleButton value="1" className={styles.toggleButton}>
              Phase 1
            </ToggleButton>
            <ToggleButton value="2" className={styles.toggleButton}>
              Phase 2
            </ToggleButton>
            <ToggleButton value="3" className={styles.toggleButton}>
              Phase 3
            </ToggleButton>
          </ToggleButtonGroup>

          <div className={styles.moviesContainer}>
            {filteredMovies.map((movie) => (
              <div key={movie.id} className={styles.movieCard}>
                <Link to={`/movie/${movie.id}`} className={styles.movieLink}>
                  <img
                    src={imageUrl(movie.poster)}
                    alt={movie.title}
                    className={styles.moviePoster}
                  />
                  <div className={styles.movieInfo}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AllMovies;
