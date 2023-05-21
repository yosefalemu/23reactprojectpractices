import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const { id, image, name, title, quote } = data[index];

  const check = (newIndex) => {
    if (newIndex === data.length) {
      return 0;
    }
    if (newIndex < 0) {
      return data.length - 1;
    }
    return newIndex;
  };

  const handleRightClick = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return check(newIndex);
    });
  };
  const handleLeftClick = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return check(newIndex);
    });
  };
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <article key={id}>
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>

        <button className="prev" onClick={handleLeftClick}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={handleRightClick}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
