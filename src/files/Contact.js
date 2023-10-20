import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone, faComments, faVideo, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.details}>
          <div className={styles.detailsTitle}>
            <div>Contact Us!</div>
            <div>One Button Away.</div>
          </div>
          <div>
            Do you have a problem finding your dream home? Need guidance in
            buying your home? or in need of consultation on residential issues?
            Just contact us.
          </div>
          <div>
            {accordionData.map((item, index) => {
              return (
                <div className={styles.dataCont} key={index}>
                  <div>{item.thumbnail}</div>
                  <div>
                    <div>{item.title}</div>
                    <div>{item.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.imgCont}>
          <div className={styles.valuesImg} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
const accordionData = [
  {
    title: "Phone Call",
    thumbnail: <FontAwesomeIcon style={{color: 'rgb(20, 118, 255)'}}icon={faSquarePhone}/>,
    content: "+(1)5055170099",
  },
  {
    title: "Chat",
    thumbnail: <FontAwesomeIcon style={{color: 'rgb(20, 118, 255)'}} icon={faComments}/>,
    content: "+(1)5055170099",
  },
  {
    title: "Video Call",
    thumbnail: <FontAwesomeIcon  style={{color: 'rgb(20, 118, 255)'}} icon={faVideo}/>,
    content: "+(1)5055170099",
  },
  {
    title: "Email",
    thumbnail: <FontAwesomeIcon style={{color: 'rgb(20, 118, 255)'}} icon={faPaperPlane} />,
    content: "hipex@contact.com",
  },
];
