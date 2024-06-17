import styles from "./App.module.css";
import Navbar from "./files/Navbar";
import Home from "./files/Home";
import Residences from "./files/Residences";
import Values from "./files/Values";
import Contact from "./files/Contact";
import Footer from "./files/Footer";
import { useEffect, useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const residencesRef = useRef(null);
  const valueRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const scrollToSection = (sectionIndex) => {
    let sectionRef;

    switch (sectionIndex) {
      case 0:
        sectionRef = homeRef;
        break;
      case 1:
        sectionRef = residencesRef;
        break;
      case 2:
        sectionRef = valueRef;
        break;
      case 3:
        sectionRef = contactRef;
        break;
      default:
        sectionRef = homeRef;
        break;
    }

    if (sectionRef.current) {
      const marginTop = 0.1 * window.innerHeight; // Calculate 5% of the window height
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY + sectionTop - marginTop;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <Navbar scroller={scrollToSection} />
      </div>
      <div>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={residencesRef}>
          <Residences />
        </div>
        <div ref={valueRef}>
          <Values />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
