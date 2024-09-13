import React, { useEffect, useState, useCallback } from "react";
import styles from "../../styles/stonesCarousel.module.css";

import data from "../../data/stones.json";

const BASE_URL = "https://drive.google.com/thumbnail";

const StonesCarousel = () => {
  const [currentAngle, setCurrentAngle] = useState(0); 
  const img_angle = 360 / 6; 

  const rotateCarousel = useCallback((direction) => {
    const newAngle = currentAngle + direction * img_angle;
    setCurrentAngle(newAngle);
  }, [currentAngle, img_angle]); 

  const handleImageClick = useCallback((e, index) => {
    const midPoint = e.target.getBoundingClientRect().x + e.target.clientWidth / 2;
    const screenMidPoint = window.innerWidth / 2;

    if (midPoint < screenMidPoint) {
      rotateCarousel(1);
    } else {
      rotateCarousel(-1);
    }
  }, [rotateCarousel]); 

  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") {
      rotateCarousel(1); 
    } else if (e.key === "ArrowRight") {
      rotateCarousel(-1); 
    }
  }, [rotateCarousel]);

  useEffect(() => {
    const gallery = document.querySelector(`.${styles.gallery}`);
    const images = document.querySelectorAll(`.${styles.gallery} img`);

    gallery.style.transform = `perspective(2000px) rotateX(-2deg) rotateY(${currentAngle}deg)`;

    window.addEventListener("keydown", handleKeyDown);

    images.forEach((image, i) => {
      image.style.setProperty('--index', i);
      image.onclick = (e) => handleImageClick(e, i);
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentAngle, handleImageClick, handleKeyDown]);

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {data.map((stone, index) => (
          <img
            key={stone.id}
            src={`${BASE_URL}?id=${stone.image}`}
            alt={stone.name}
          />
        ))}
      </div>
    </div>
  );
};

export default StonesCarousel;
