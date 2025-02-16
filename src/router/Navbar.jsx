import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={style.container}>
        <div className={style.image}>
          <img alt="image" className={style.logo} />
        </div>
        <button className={style.toggle}>☰</button>
        <ul className={style.rightNav}>
          <li className={style.list}>
            <Link to="/" className={style.link}>
              <span> Home</span>
            </Link>
          </li>

          <li className={style.dropdown}>
            <span className={style.link}>About ▾</span>
            <ul className={style.dropdownMenu}>
              <li>
                <Link to="/about-iskcon" className={style.link}>
                  ISKCON
                </Link>
              </li>
              <li>
                <Link to="/founder-acharya" className={style.link}>
                  Founder Acharya
                </Link>
              </li>
              <li>
                <Link to="/iskcon-ynr" className={style.link}>
                  ISKCON YNR
                </Link>
              </li>
            </ul>
          </li>

          <li className={style.dropdown}>
            <span className={style.link}>Forum ▾</span>
            <ul className={style.dropdownMenu}>
              <li>
                <Link to="/forum-iyf" className={style.link}>
                  IYF
                </Link>
              </li>
              <li>
                <Link to="/forum-children" className={style.link}>
                  Children
                </Link>
              </li>
              <li>
                <Link to="/forum-girls" className={style.link}>
                  Girl Forum
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/activities" className={style.link}>
              Activities
            </Link>
          </li>

          <li className={style.dropdown}>
            <span className={style.link}>Donation ▾</span>
            <ul className={style.dropdownMenu}>
              <li>
                <Link to="/donation-food" className={style.link}>
                  Food Donation
                </Link>
              </li>
              <li>
                <Link to="/donation-education" className={style.link}>
                  Education Donation
                </Link>
              </li>
              <li>
                <Link to="/donation-temple" className={style.link}>
                  Temple Donation
                </Link>
              </li>
              <li>
                <Link to="/donation-healthcare" className={style.link}>
                  Healthcare Donation
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/gallery" className={style.link}>
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
