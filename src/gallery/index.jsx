import React from "react";
import styles from "./style.module.css";
import ImageCard from "./galerycard/GalleryCard";
import srck from "../../public/temple.png"

const Gallery = () => {
  const imageData = [
    { id: 1, src: srck, date: "2024-03-01" },
    { id: 2, src: srck, date: "2024-02-20" },
    { id: 3, src: srck, date: "2024-01-15" },
    { id: 4, src: srck, date: "2024-01-15" },
    { id: 5, src: srck, date: "2024-01-15" },
    { id: 6, src: srck, date: "2024-01-15" },
    { id: 7, src: srck, date: "2024-01-15" },
    { id: 8, src: srck, date: "2024-01-15" },
  ];
  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.title}>Deity Darshan Of The March Month</h2>
      <div className={styles.grid}>
        {imageData.map((image) => (
          <ImageCard key={image.id} src={image.src} date={image.date} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
