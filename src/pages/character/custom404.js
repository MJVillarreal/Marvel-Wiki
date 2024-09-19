import React from 'react';
import styles from "../../styles/custom404.module.css"

import gif from "../../assets/images/ashes.gif"

const Custom404 = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.error}>
      <h1>Error 404: Character not found</h1>
      <h2>The character with the specified ID does not exist.</h2>
      <img src={gif} alt=''></img>
      </div>
    </div>
  );
};

export default Custom404;