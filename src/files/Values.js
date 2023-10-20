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
            <div>The Value We Give To You</div>
          </div>

          <div>
            We're always ready to help by providing the best service for you, We
            believe a good place to live can make your life better.
          </div>
          <div>
            {accordionData.map((item, index) => {
              return (
                <details className={styles.accordion} key={index}>
                  <summary className={styles.accordionBtn}>

                    {item.title}
                  </summary>
                  <div className={styles.accordionContent}>
                    <p>{item.content}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const accordionData = [
  {
    title: "Best interest rates on the market",
    thumbnail: (
      <i  class="fa-brands fa-stack-overflow"></i>
    ),
    content:
      "Prices we provide are the best for you, we guarantee you no price change on your property due to any unexpected costs that may accure.",
  },
  {
    title: "Prevent unstable prices",
    thumbnail: <i class="fa-solid fa-arrow-trend-down"></i>,
    content:
      "Prices we provide are the best for you, we guarantee you no price change on your property due to any unexpected costs that may accure.",
  },
  {
    title: "Best prices in the market",
    thumbnail: <i class="fa-solid fa-hand-holding-dollar"></i>,
    content:
      "Prices we provide are the best for you, we guarantee you no price change on your property due to any unexpected costs that may accure.",
  },
  {
    title: "Security for your data",
    thumbnail: <i class="fa-solid fa-shield-halved"></i>,
    content:
      "Prices we provide are the best for you, we guarantee you no price change on your property due to any unexpected costs that may accure.",
  },
];

export default Values;
