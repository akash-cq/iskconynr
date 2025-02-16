import React from 'react'
import style from "./cart.module.css";

export default function Cart(props) {
  return (
    <>
      <div className={style.container}>
        <h3 className={style.upper}>{props.length}</h3>
        <p className={style.lower}>
         {props.text}
        </p>
      </div>
    </>
  );
}
