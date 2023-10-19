import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentHome}>
        <div className={styles.left}>
          <div className={styles.title}>
            Discover Top Properties Of Your Choice!
          </div>
          <div className={styles.expl}>
            Find a variety of properties that suits your preferances. With
            HiPex, it is only one button away!
          </div>
          <div className={styles.search}>
            <div className={styles.cont}>
              <div className={styles.containerItem}>
                <form className={styles.form}>
                  <input
                    type="email"
                    className={styles.form__field}
                    placeholder="Enter the address of your choice"
                  />
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btn__inside} ${styles.btn__primary} ${styles.uppercase}`}>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.detail}>
              <div>
                <div>9K</div>
                <div>+</div>
              </div>
              <div>Premium Residences</div>
            </div>
            <div className={styles.detail}>
              <div>
                <div>2K</div>
                <div>+</div>
              </div>
              <div>Happy Customers</div>
            </div>
            <div className={styles.detail}>
              <div>
                <div>23K</div>
                <div>+</div>
              </div>
              <div>Real-Estate Awards</div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightImg}/>
        </div>
      </div>
    </div>
  );
};
export default Home;
