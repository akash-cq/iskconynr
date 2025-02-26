import React from "react";
import IskconForm from "../form.jsx";
import styles from "./iyf.module.css";

const IyfPage = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.introSection}>
        <h1 className={styles.heading}>ISKCON YOUTH FORUM</h1>
        <p className={styles.description}>
          Welcome to the ISKCON Youth Forum! Dive into spirituality, culture,
          and community with like-minded youth. Fill out the form below to get
          involved.
        </p>
      </section>

      <section className={styles.imageSection}>
        <div className={styles.blankImage}></div>
        <div className={styles.blankImage}></div>
        <div className={styles.blankImage}></div>
      </section>

      <section className={styles.detailsSection}>
        <h2 className={styles.subHeading}>Our Mission</h2>
        <p className={styles.text}>
          The ISKCON Youth Forum aims to inspire and empower young individuals
          through spiritual education, cultural events, and community service.
        </p>

        <h2 className={styles.subHeading}>Get Involved</h2>
        <p className={styles.text}>
          Join us for weekly sessions, festivals, and social service programs.
          Be a part of a community that encourages holistic growth.
        </p>
      </section>

      <IskconForm />
    </div>
  );
};

export default IyfPage;
