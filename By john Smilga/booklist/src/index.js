import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Alex Michaelides",
  title: "THE SILENT PATIENT",
  img: "https://m.media-amazon.com/images/I/51oVTRsjcqL._SX329_BO1,204,203,200_.jpg",
};

const secondBook = {
  author: "Oishik Majumdars",
  title: "Dhusar Jagat",
  img: "https://m.media-amazon.com/images/I/419UfMbI55L._SX319_BO1,204,203,200_.jpg",
};

const thirdBook = {
  author: "Will Smith",
  title: "Will",
  img: "https://m.media-amazon.com/images/I/51povAtTE5L._SX327_BO1,204,203,200_.jpg",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula felis, finibus a urna sed, pellentesque pellentesque neque. Sed nulla.</p>
        <button>Click Me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
