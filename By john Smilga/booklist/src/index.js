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

const Book = () => {
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () => <img src="https://m.media-amazon.com/images/I/51oVTRsjcqL._SX329_BO1,204,203,200_.jpg" alt="THE SILENT PATIENT"></img>
const Title = () => <h2>THE SILENT PATIENT</h2>

const Author = () => {
    return <h2 style={{color:'#617d98',fontSize:'1rem',marginTop:'0.5rem'}}> Alex Michaelides</h2>
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

