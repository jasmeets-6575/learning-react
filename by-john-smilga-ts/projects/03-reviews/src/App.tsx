import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { PersonType } from "./types.d";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div className="author">{name}</div>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn">
            <FaChevronLeft />
          </button>
          <button className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster">surprise me</button>
      </article>
    </main>
  );
}

export default App;
