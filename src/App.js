import styles from "./App.module.css";
import Navbar from "./files/Navbar";
import Home from "./files/Home";
import Residences from "./files/Residences";
function App() {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
        <Residences/>
      </div>
    
    </div>
  );
}

export default App;
