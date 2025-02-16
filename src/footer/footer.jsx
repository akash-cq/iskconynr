import React from "react";
import styles from "./Footer.module.css"; // Import CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Logo & About */}
        <div className={styles.section}>
          <img
            src="/iskcon-logo.png"
            alt="ISKCON Logo"
            className={styles.logo}
          />
          <p>
            Dedicated to spreading Krishna consciousness, ISKCON serves as a
            beacon of devotion, spiritual wisdom, and divine love.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul className={styles.links}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media & Newsletter */}
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

          <h3>Stay Updated</h3>
          <form className={styles.newsletter}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} ISKCON | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
