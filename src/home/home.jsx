import React from 'react'
import style from "./home.module.css"
import Carting from '../carts/cart'
import SvgCart from '../svgCart/svgCart';
export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.image}>500*1920</div>
        <div className={style.about}>
          <h2 className={style.h2}>About Our Temple</h2>
          <div className={style.insideabout}>
            <div className={style.imageAbout}></div>
            <div className={style.cartsContainer}>
              <Carting
                heading={"Our Mission"}
                content={
                  "To promote spiritual understanding and Krishna consciousness through the teachings of Bhagavad Gita and other Vedic scriptures."
                }
              ></Carting>
              <Carting
                heading={"Our Mission"}
                content={
                  "To promote spiritual understanding and Krishna consciousness through the teachings of Bhagavad Gita and other Vedic scriptures."
                }
              ></Carting>
            </div>
          </div>
        </div>
        <div className={style.activity}>
          <h2 className={style.h2}>Temple Activity</h2>
          <div className={style.svgcontainer}>
            <SvgCart
              svgIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="orange"
                >
                  <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" />
                </svg>
              }
              heading="Prasadam Distribution"
              content="Free distribution of sanctified vegetarian food"
            />
            <SvgCart
              svgIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="orange"
                >
                  <path d="M480-144q-48-32-102.7-52T264-216q-38 0-76 7.5T115-186q-24 10-45.5-3.53T48-229v-503q0-14 7.5-26T76-776q43.68-20 91.15-30 47.48-10 96.85-10 57.31 0 112.16 13.5Q431-789 480-762v534q51-27 105-43.5T696-288q37.37 0 73.19 6.5Q805-275 840-264v-528q11 4 22.13 7.47 11.13 3.48 21.87 8.53 13 7 20.5 18.5T912-732v503q0 25-21.5 39t-45.5 4q-36-14-73.5-22t-75.5-8q-58.6 0-113.3 20Q528-176 480-144Zm72-192v-384l216-192v384L552-336Zm-144 68v-441q-34-19-71.5-27t-76.5-8q-36 0-71.34 7.84T120-712.64V-268q34-11 69.5-15.5T260-288q38.4 0 75.2 4.5Q372-279 408-268Zm0 0v-441 441Z" />
                </svg>
              }
              heading="Spiritual Classes"
              content="Daily classes on Bhagavad Gita and Srimad Bhagavatam"
            />
            <SvgCart
              svgIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="orange"
                >
                  <path d="M0-240v-53q0-38.57 41.5-62.78Q83-380 150.38-380q12.16 0 23.39.5t22.23 2.15q-8 17.35-12 35.17-4 17.81-4 37.18v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.86-3.5-37.43T765-377.27q11-1.73 22.17-2.23 11.17-.5 22.83-.5 67.5 0 108.75 23.77T960-293v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480-390q-79 0-129.5 23.5T300-305v5ZM149.57-410q-28.57 0-49.07-20.56Q80-451.13 80-480q0-29 20.56-49.5Q121.13-550 150-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T149.57-410Zm660 0q-28.57 0-49.07-20.56Q740-451.13 740-480q0-29 20.56-49.5Q781.13-550 810-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T809.57-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.35-60Q506-540 523-557.35t17-43Q540-626 522.85-643t-42.5-17q-25.35 0-42.85 17.15t-17.5 42.5q0 25.35 17.35 42.85t43 17.5ZM480-300Zm0-300Z" />
                </svg>
              }
              heading="Youth Programs"
              content="Special programs for youth spiritual development"
            />
            <SvgCart
              svgIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="orange"
                >
                  <path d="M393-120q-63 0-106.5-43.5T243-270q0-63 43.5-106.5T393-420q28 0 50.5 8t39.5 22v-450h234v135H543v435q0 63-43.5 106.5T393-120Z" />
                </svg>
              }
              heading="Kirtan & Bhajans"
              content="Experience divine musical meditation through devotional songs"
            />
          </div>
        </div>
      </div>
    </>
  );
}
