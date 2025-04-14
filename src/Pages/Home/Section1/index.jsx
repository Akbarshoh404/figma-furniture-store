import React from "react";
import styles from "./style.module.scss";
import { combinedData } from "../../../Data/data";

const Section1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {combinedData.map((roomType, index) => (
            <div key={index} className={styles.card}>
              <img
                src={roomType.img}
                alt={roomType.name}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{roomType.name}</h3>
                <p className={styles.cardItemCount}>
                  {roomType.items.length}{" "}
                  {roomType.items.length === 1 ? "item" : "items"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
