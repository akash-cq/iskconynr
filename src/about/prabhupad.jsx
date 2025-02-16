import React from 'react'
import style from "./Prabhu.module.css"
export default function Prabhupad() {
  return (
    <>
      <div className={style.container}>
        <section className={style.names}>
          <h1 className={style.h1}>Founder Acharya</h1>
          <p className={style.p}>His Divine Grace</p>
          <p className={style.p}>A.C. Bhaktivedanta Swami Prabhupada</p>
        </section>
        <section className={style.Bio}>
          <div className={style.image}>700*400</div>
          <div className={style.paragraph}>
            <p>
              His Divine Grace A. C. Bhaktivedanta Swami Prabhupada,
              Founder-Acharya of International Society for Krishna Consciousness
              (ISKCON), was born Abhay Charan De, on the 1 September 1896, in
              Calcutta. In 1922 he met His Divine Grace Bhaktisiddanta Sarasvati
              Thakur, Founder of Gaudiya Math, who requested Abhay to broadcast
              Vedic knowledge in the English medium. In 1933, at Allahabad,
              Abhay was formally initiated and made it his life ambition to
              expound the Vedic conclusion that real freedom means liberation
              from the miseries of material life : birth, death, old age and
              disease, a state that can be permanently attained by awakening
              one’s pure love for God, Krishna-prema or Krishna-bhakti.
            </p>
            <p>
              In the ensuing years Abhay Charanaravinda (his initiated name),
              wrote a commentary on the Bhagavad-gita. In 1944 he started the
              Back to Godhead magazine, which to this day is being continued by
              his disciples.
            </p>
            <p>
              In recognition of his philosophical knowledge and devotion the
              Gaudiya Vaishnava Society honored him with the title Bhaktivedanta
              in 1947. Following his retirement from married life, A.C.
              Bhaktivedanta traveled to Vrindavan where he lived in the humble
              surrounding of the Radha Damodar temple. In 1959 he took the
              sannyasa order of life and, as A.C. Bhaktivedanta Swami, started
              his work on the multi-volume translation and commentary of the
              18,000 verse Srimad Bhagavatam. In 1965, at the age of 69, when
              ordinary persons are thinking of retirement, he went to the United
              States to fulfill the mission of his spiritual master and founded
              ISKCON.
            </p>
            <p>
              He brought to the West the divine teachings of Lord Caitanya
              Mahaprabhu who taught the public glorification of Hare Krishna
              mantra. Srila Prabhupada, (as he was affectionately called by his
              followers), taught on a non-sectarian level that every living
              being is an eternal servant of Lord Krishna with a dormant natural
              propensity to experience the eternal bliss of pure love of God.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
