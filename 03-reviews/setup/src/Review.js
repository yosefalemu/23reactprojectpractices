import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const completeIndex = (newIndex) => {
    if (newIndex === people.length) {
      return 0;
    }
    if (newIndex < 0) {
      return people.length - 1;
    }
    return newIndex;
  };

  const handleClickLeft = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return completeIndex(newIndex);
    });
  };
  const handleClickRight = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return completeIndex(newIndex);
    });
  };
  const handleRandom = () => {
    const newIndex = Math.floor(Math.random() * people.length);
    setIndex(newIndex);
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="">
          <button className="prev-btn" onClick={handleClickLeft}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleClickRight}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={handleRandom}>
          Suprise me
        </button>
      </article>
    </>
  );
};

export default Review;
