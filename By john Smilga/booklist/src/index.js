import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"

function Booklist(){
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const author = "Alex Michaelides";
const Book = () => {
    const title = "THE SILENT PATIENT";
    return <article className="book">
        <img src="https://m.media-amazon.com/images/I/51oVTRsjcqL._SX329_BO1,204,203,200_.jpg" alt="THE SILENT PATIENT"></img>
        <h2>{title}</h2>
        <h4>{author.toUpperCase()}</h4>
    </article>
}


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

