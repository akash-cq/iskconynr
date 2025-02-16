import React from "react";
import style from "./iskconynr.module.css";
import Cart from "./carts/cart";

export default function IskconYnr() {
    const arr = [
      "Spiritual Enlightenment: ",
      "Community Service",
      "Inclusive Devotion",
    ];
    const para=[
        "Offering daily worship, chanting, scriptural classes, and meditative practices that deepen one’s connection with Krishna.",
        "Extending outreach through initiatives like Food for Life, educational programs, and cultural events to uplift the community.",
        "Creating an environment where people of all backgrounds can experience the joy of spiritual learning and communal celebration."
    ]
  return (
    <>
      <div className={style.container}>
        <section className={style.names}>
          <h1 className={style.h1}>SRI SRI RADHA KUNJBIAHRI JI</h1>
          <p className={style.p}>ISKCON YAMUNANAGAR</p>
        </section>
        <section>
          <div className={style.image}>100% *600</div>
        </section>
        <section className={style.paraYnr}>
          <p>
            ISKCON Yamunanagar Temple is a vibrant spiritual haven founded to
            spread the timeless teachings of Lord Krishna and to foster a
            compassionate, inclusive community in the region. Rooted in the
            vision of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the
            temple was established as a center for worship, spiritual education,
            and community service.
          </p>
          <h1 className={style.heading}>Our Founding Journey</h1>
          <p className={style.journey}>
            The journey of ISKCON Yamunanagar began with the aspiration to
            create a sacred space where devotees and seekers could come together
            to experience divine love and learn the path of Krishna
            consciousness. A significant milestone in this journey was the
            sacred bhumi-puja yajna conducted on Aksaya Tritiya, 22nd April
            2004. On that auspicious day, His Holiness Gopal Krishna Goswami,
            along with the congregation, sanctified the temple site, marking the
            beginning of a long-awaited dream to build the magnificent Sri Sri
            Radha Kunjabihari Temple in Yamunanagar. This event symbolized both
            the physical and spiritual foundation of our temple, setting the
            stage for decades of dedicated service and devotion.
          </p>
          <h1 className={style.heading}>Our Vision And Misssion</h1>
          <p>
            Inspired by the ideals of unconditional love and devotion, ISKCON
            Yamunanagar is dedicated to:
          </p>
          <div className={style.carts}>
            {arr.map((val, indx) => {
              return <Cart key={indx} text={para[indx]} length={val} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
}
