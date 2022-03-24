import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "./images";
import "./App.css";

function App() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  const wrapper = useRef();

  let index = 0;

  const moveSlider = (direction) => {
    if (direction === "right") {
      if (carousel.current.offsetWidth * index >= carousel.current.scrollWidth) {
        index = 0;
      } else {
        index++;
      }
    }
    if (direction === "left") {
      if (index === 0) {
        index = 0;
      } else {
        index--;
      }
    }
    wrapper.current.style.transform = `translateX(-${carousel.current.offsetWidth * index}px)`;
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="App">
      <nav>
        <span>Zoms Design</span> <span>React Slider</span>
      </nav>
      <motion.div ref={carousel} className="carousel">
        <div className="slider-arrows">
          <div onClick={() => moveSlider("left")}>{"<"}</div>
          <div onClick={() => moveSlider("right")}>{">"}</div>
        </div>
        <motion.div
          ref={wrapper}
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
