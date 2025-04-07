import React from "react";
import styles from "./style.module.scss";
import img from "../../Components/images/section3.png";

const Section3 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <img src={img} alt="" />
          <div>
            <p className={styles.p1}>
              Track your progress with our advanced site.
            </p>
            <p className={styles.p2}>
              We share common trends and strategies for improving your rental
              income and making sure you stay in high demand.
            </p>
            <p className={styles.p3}>Start shopping ➡</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
