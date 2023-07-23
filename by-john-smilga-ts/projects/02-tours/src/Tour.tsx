import { useState } from "react";
import { TourType } from "./types.d";

const Tour = ({ id, image, info, name, price, removeTour }: TourType) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <article>
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
