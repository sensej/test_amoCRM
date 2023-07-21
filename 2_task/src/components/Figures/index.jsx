import styles from "./style.module.scss";

const Figures = () => {
  return (
    <div>
      <div className={styles.purpleBall}></div>
      <div className={styles.redBall}></div>
      <div className={styles.smallRedBall}></div>
      <div className={styles.redLight}></div>
      <div className={styles.purpleLight}></div>
    </div>
  );
};

export default Figures;
