import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Alex Michaelides",
    title: "THE SILENT PATIENT",
    img: "https://m.media-amazon.com/images/I/51oVTRsjcqL._SX329_BO1,204,203,200_.jpg",
  },
  {
    author: "Oishik Majumdars",
    title: "Dhusar Jagat",
    img: "https://m.media-amazon.com/images/I/419UfMbI55L._SX319_BO1,204,203,200_.jpg",
  },
  {
    author: "Will Smith",
    title: "Will",
    img: "https://m.media-amazon.com/images/I/51povAtTE5L._SX327_BO1,204,203,200_.jpg",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
