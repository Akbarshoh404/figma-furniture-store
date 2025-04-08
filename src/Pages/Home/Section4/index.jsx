import React from "react";
import styles from "./style.module.scss";
import img from "../../../Components/images/section4.png";

const Section4 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.quoteMark}>“</p>
          <p className={styles.stars}>★★★★★</p>
          <p className={styles.testimonial}>
            “OMG! I cannot believe that I have got a brand new room after
            getting your services. It was super easy to order and get started.”
          </p>
        </div>
        <div className={styles.image}>
          <img src={img} alt="Section 4 illustration" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
