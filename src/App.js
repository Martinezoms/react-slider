import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "./images";
import "./App.css";

function App() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="App">
      <nav>
        <span>Zoms Design</span> <span>React Slider</span>
      </nav>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image, i) => (
            <motion.div key={i} className="item">
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
