import styles from "./Values.module.css";
const Values = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgCont}>
          <div className={styles.valuesImg} />
        </div>
        <div className={styles.details}>
          <div className={styles.detailsTitle}>
            <div>Our Value</div>
            <div>
              The Value We Give To You
            </div>
          </div>

          <div>
            We're always ready to help by providing the best service for you, We
            believe a good place to live can make your life better.
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Values;
