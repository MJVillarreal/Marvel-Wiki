import React from "react";
import { Link } from "react-router-dom";

import { Autocomplete, TextField } from "@mui/material";

import styles from "../styles/navbar.module.css";
import Logo from "../assets/images/Marvel-Logo.png";

import movieData from "../data/movies.json";
import characterData from "../data/characters.json";

const Navbar = () => {
  const combinedData = [
    ...movieData.map((movie) => ({
      id: movie.id,
      label: movie.title,
      type: "Movie",
    })),
    ...characterData.map((char) => ({
      id: char.id,
      label: char.name,
      type: "Character",
    })),
  ];

  const sortedData = combinedData.sort((a, b) => {
    if (a.type < b.type) return 1;
    if (a.type > b.type) return -1;

    return a.label.localeCompare(b.label);
  });

  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <img src={Logo} alt="logo" className={styles.navbarLogo}></img>
      </Link>

      <Autocomplete
      className={styles.customAutocomplete}
        options={sortedData}
        groupBy={(option) => {
          const firstLetter = option.label[0].toUpperCase();
          return `${option.type} - ${firstLetter}`;
        }}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Movies or Characters"
            variant="outlined"
          />
        )}
        onChange={(event, newValue) => {
          if (newValue) {
            if (newValue.type === "Movie") {
              window.location.href = `/movie/${newValue.id}`;
            } else if (newValue.type === "Character") {
              window.location.href = `/character/${newValue.id}`;
            }
          }
        }}
      />
    </div>
  );
};

export default Navbar;
