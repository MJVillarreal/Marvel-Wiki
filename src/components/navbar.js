import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/navbar.module.css";
import Logo from "../assets/images/Marvel-Logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <img src={Logo} alt="logo" className={styles.navbarLogo}></img>
      </Link>
      <h1>search bar</h1>
    </div>
  );
};

export default Navbar;
