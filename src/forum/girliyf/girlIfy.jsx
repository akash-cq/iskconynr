import React from "react";
import IskconForm from "../form.jsx";
import styles from "./girlIgf.module.css";

const GirlIgfPage = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.introSection}>
        <h1 className={styles.heading}>ISKCON GIRLS FORUM</h1>
        <p className={styles.description}>
          ISKCON Girls Forum, Yamunagar is a platform that helps girls revive
          their spiritual consciousness and engage their intelligence and
          capabilities in the services of the Supreme Lord. IGF comprises of
          over 100 girls (age group 18-30) coming from diverse backgrounds.
        </p>
        <p className={styles.description}>
          They are attending programs for spiritual enlightenment and
          cultivation which are helping them to become responsible beings and
          sincere devotees. The members of this forum are epitomes of how a girl
          can perfectly balance household duties, spiritual life and a career.
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
          IGF, since its conception has significantly contributed to the temple
          by serving in various roles like preaching young girls, marriage
          counselling, Hare Krsna Sunday school teaching, managing festival
          stalls etc.
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

export default GirlIgfPage;
