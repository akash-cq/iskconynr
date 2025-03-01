import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { useState } from "react";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <>
      <nav className={style.container}>
        <div className={style.image}>
          <img alt="image" className={style.logo} />
        </div>
        <div className={style.cont}>
          <ul
            className={`${style.rightNav} ${menu === true ? style.hide : ""}`}
          >
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
                  <Link to="/forum-childsIyf" className={style.link}>
                    Children
                  </Link>
                </li>
                <li>
                  <Link to="/forum-GirlsIyf" className={style.link}>
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
                  <Link to="/donation-fooddonation" className={style.link}>
                    Food Donation
                  </Link>
                </li>
                <li>
                  <Link to="/donation-templedonation" className={style.link}>
                    Temple Donation
                  </Link>
                </li>
                <li>
                  <Link to="/donation-festivaldonation" className={style.link}>
                    Festival Donation
                  </Link>
                </li>
                <li>
                  <Link to="/donation-otherdonation" className={style.link}>
                    Other Donation
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
          <button
            onClick={() => setMenu((prev) => !prev)}
            className={style.toggle}
          >
            <svg
              className={style.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#A96424"
            >
              <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
