import React from "react";
import styles from "./Gallery.module.css";
const ImageCard = ({ src,date }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt="Gallery" className={styles.image} />
      <p className={styles.date}>20-02-2025</p>
    </div>
  );
};

export default ImageCard;
