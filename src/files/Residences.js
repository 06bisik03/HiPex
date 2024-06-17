import styles from "./Residences.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ResidenceList from "./residenceList";

import { Pagination } from "swiper/modules";
import LazyLoad from "react-lazy-load";
const Residences = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div>Best Choice</div>
          <div>Popular Residences</div>
        </div>
        <div className={styles.residences}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            style={{
              "--swiper-pagination-color": "orange",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-inactive-color":
                "rgba(255, 255, 255, 0.889)",
            }}
            pagination={{
              clickable: true,
            }}
            speed={300}
            modules={[Pagination]}
            className={styles.mySwiper}
          >
            {ResidenceList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.swip}>
                    <div className={styles.carouselImg}>
                      <LazyLoad>
                        <img alt="x" src={`/images/house${index + 1}.jpg`} />
                      </LazyLoad>
                    </div>
                    <div className={styles.carouselDetails}>
                      <div className={styles.detailTitle}>
                        {item.residence_title}
                      </div>
                      <div className={styles.price}>{item.residence_price}</div>
                      <div className={styles.expl}>
                        <div className={styles.explF}>
                          <div>Rooms: {item.residence_rooms}</div>
                          <div>Size: {item.residence_size}</div>
                          <div>
                            Security: {item.residence_security ? "Yes" : "No"}
                          </div>
                          <div>Pool: {item.residence_pool ? "Yes" : "No"}</div>
                          <div>Floors: {item.residence_floors}</div>
                          <div>Parking: {item.residence_parking}</div>
                        </div>
                      </div>
                      <div className={styles.btn}>
                        <button>Details</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.nav}></div>
      </div>
    </div>
  );
};

export default Residences;
