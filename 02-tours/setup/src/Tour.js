import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour}) => {
  const parLength = info.length / 2;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, parLength)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={()=>removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
