import React from 'react'
import style from "./iskcon.module.css"
import Cart from './carts/cart';
export default function ISKCONPage() {
  const arr = [
    "To systematically propagate spiritual knowledge to society at large and to educate all people in the techniques of spiritual life in order to check the imbalance of values in life and to achieve real unity and peace in the world.",
    "To propagate a consciousness of Krishna (God), as it is revealed in the great scriptures of India, Bhagavad-gita and Srimad-Bhagavatam.",
    "To bring the members of the Society together with each other and nearer to Krishna, the prime entity, thus developing the idea within the members, and humanity at large, that each soul is part and parcel of the quality of Godhead (Krishna).",
    "To teach and encourage the sankirtana movement, congregational chanting of the holy name of God, as revealed in the teachings of Lord Sri Caitanya Mahaprabhu.",
    "To erect for the members and for society at large a holy place of transcendental pastimes dedicated to the personality of Krishna.",
    "To bring the members closer together for the purpose of teaching a simpler, natural way of life.",
    "With a view towards achieving the aforementioned purposes, to publish and distribute periodicals, magazines, books and other writings.",
  ];
  return (
    <>
      <div className={style.container}>
        <section className={style.prabhu}>
          <div className={style.image}>
            <h2>300*300</h2>
          </div>
          <div className={style.paragraph}>
            <p>
              The International Society for Krishna Consciousness (ISKCON) is
              the spiritual institution founded by His Divine Grace A.C.
              Bhaktivedanta Swami Prabhupada in July 1966 as a continuation of
              the Brahma-Madhva-Gaudiya sampradaya. It is scripturally based on
              the 5,000-year-old Sanskrit text Bhagavad-gita. ISKCON was
              personally directed by its Founder-Acarya Srila Prabhupada until
              his departure on November 14, 1977.
            </p>
          </div>
        </section>
        <section className={style.name}>1520*200</section>
        <section className={style.cartsContainer}>
          {arr.map((indx, index) => {
            return <Cart key={index} text={indx} length={index + 1}></Cart>;
          })}
        </section>
        <section className={style.lastPart}>
          <div className={style.image}>
            <h2>300*300</h2>
          </div>
          <div className={style.paraLast}>
            <p>
              Today, ISKCON is a worldwide community of devotees, or Vaishnavas
              , practicing bhakti yoga, loving service to Krishna. The Krishna
              Consciousness movement is not exactly a religion, but an
              educational and cultural system that is open to everyone.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
