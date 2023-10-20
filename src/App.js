import styles from "./App.module.css";
import Navbar from "./files/Navbar";
import Home from "./files/Home";
import Residences from "./files/Residences";
import Values from "./files/Values";
import Contact from "./files/Contact";
function App() {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
        <Residences/>
        <Values />
        <Contact/>
      </div>
    
    </div>
  );
}

export default App;
