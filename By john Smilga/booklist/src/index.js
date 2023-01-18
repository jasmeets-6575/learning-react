import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"

const author = "Alex Michaelides";
const title = "THE SILENT PATIENT";
const img = "https://m.media-amazon.com/images/I/51oVTRsjcqL._SX329_BO1,204,203,200_.jpg"

function Booklist(){
    return <section className="booklist">
        <Book author={author} title={title} img={img} />
        <Book author={author} title={title} img={img} />
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


// const Author = () => {
//     const inlineHeadingStyle = {
//         color:'#617d98',
//         fontSize:'1rem',
//         marginTop:'0.5rem'        
//     };
//     return <h4 style={inlineHeadingStyle} >Alex Michaelides</h4>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist/>);

