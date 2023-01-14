import React from "react";
import ReactDOM from "react-dom/client";

function Booklist(){
    return <section>
        <Book/>
    </section>
}

const Book = () => {
    return <article>
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () => <img src="https://m.media-amazon.com/images/I/51oVTRsjcqL._AC_UY218_.jpg" alt="THE SILENT PATIENT"></img>
const Title = () => <h2>THE SILENT PATIENT</h2>
const Author = () => {
    return <h2>Alex Michaelides</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist/>);

