import React from "react";
import styles from "./svgCart.module.css";

const SvgCart = ({ svgIcon, heading, content }) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartIcon}>{svgIcon}</div>
      <div>
        <h2 className={styles.cartHeading}>{heading}</h2>
        <p className={styles.cartContent}>{content}</p>
      </div>
    </div>
  );
};

export default SvgCart;
