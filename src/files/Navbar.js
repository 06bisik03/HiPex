import styles from "./Navbar.module.css";
const Navbar = ({scroller}) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
      <div className={styles.logo}>HiPex</div>
      <div className={styles.navElements}>
        <div onClick={() =>scroller(0) }>Home</div>
        <div onClick={() =>scroller(1) }>Residences</div>
        <div onClick={() =>scroller(2) }>Value</div>
        <div onClick={() =>scroller(3) }>Contact</div>
      </div>
      </div>
      
    </div>
  );
};
export default Navbar;
