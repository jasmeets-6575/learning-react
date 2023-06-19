import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return (
        <div>
            <Person/>
            <Message/>
        </div>
    )
}

const Person = () => {
    return <h2>This is my Name</h2>
}

const Message = () => {
    return <p>This is message</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render();

