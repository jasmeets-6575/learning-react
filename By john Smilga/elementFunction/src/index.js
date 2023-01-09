import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
    return React.createElement(
        'div',
        {},
        React.createElement("h3",{},'hello world')
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render();

