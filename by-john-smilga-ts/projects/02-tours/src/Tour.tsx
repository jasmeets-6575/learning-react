import { TourType } from "./types.d";

const Tour = ({ id, image, info, name, price, removeTour }: TourType) => {
  return (
    <article>
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button className="delete-btn btn-block" onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
