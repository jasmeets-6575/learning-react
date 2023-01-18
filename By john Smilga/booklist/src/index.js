import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"

const firstBook = {
    author:"Alex Michaelides",
    title:"THE SILENT PATIENT",
    img:"https://m.media-amazon.com/images/I/51oVTRsjcqL._SX329_BO1,204,203,200_.jpg"
};

const secondBook = {
    author:"Oishik Majumdars",
    title:"Dhusar Jagat",
    img:"https://m.media-amazon.com/images/I/419UfMbI55L._SX319_BO1,204,203,200_.jpg"
};

function Booklist(){
    return <section className="booklist">
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
}

const Book = (props) => {
    return (<article className="book">
        <img src={props.img} alt={props.title}></img>
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
    </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>);