import React from "react";
import styles from "./carts.module.css";

const Carting = ({ heading, content }) => {
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartHeading}>{heading}</h2>
      <p className={styles.cartContent}>{content}</p>
    </div>
  );
};

export default Carting;
