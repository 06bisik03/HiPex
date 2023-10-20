import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faXTwitter} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.controls}>
          <div className={styles.log}>
            <div>HiPex</div>
            <div>One Vision. One Goal. With Unity.</div>
          </div>
          <div className={styles.log2}>
            <div className={styles.btns4}>
              <div>About</div>
              <div>About Us</div>
              <div>Features</div>
              <div>News & Blog</div>
            </div>
            <div className={styles.btns4}>
              <div>Company</div>
              <div>How we work</div>
              <div>Capital</div>
              <div>Security</div>
            </div>
            <div className={styles.btns4}>
              <div>Support</div>
              <div>FAQs</div>
              <div>Support</div>
              <div>Contact Us</div>
            </div>
            <div className={styles.socials}>
                <div>Follow Us</div>
                <div>
                <FontAwesomeIcon icon={faFacebook} />
                
              
                </div>
                <div>
                <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div>
                <FontAwesomeIcon icon={faXTwitter} />
                </div>
            </div>
          </div>
        </div>
        <div className={styles.credits}>
            <div>
                <div>
                © Demo Website Created By 
                </div>
                <div>
                Baris Ekin ISIK. 
                </div>
            </div>
          All rights reserved
          Terms & Agreements Privacy Policy
        </div>
      </div>
    </div>
  );
};
export default Footer;
