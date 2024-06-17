import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imgBack = new Image();
    imgBack.src = "https://wallpapercave.com/wp/wp3784201.jpg";
    imgBack.onload = () => setImageLoaded(true);
  }, []);
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
                <input placeholder="Enter a location" />
                <button className={styles.submitBtn}>
                  Submit
                  <svg
                    fill="white"
                    viewBox="0 0 448 512"
                    height="1em"
                    className={styles.arrow}
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                  </svg>
                </button>
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
        {imageLoaded && (
          <div className={styles.right}>
            <div className={styles.rightImg} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
