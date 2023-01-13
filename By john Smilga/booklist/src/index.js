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

const Image = () => <h2>image placeholder</h2>
const Title = () => <h2>Book Title</h2>
const Author = () => {
    return <h2>Author name</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist/>);

