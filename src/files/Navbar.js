import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
      <div className={styles.logo}>HiPex</div>
      <div className={styles.navElements}>
        <div >Home</div>
        <div>Residences</div>
        <div>Value</div>
        <div>Contact</div>
      </div>
      </div>
      
    </div>
  );
};
export default Navbar;
