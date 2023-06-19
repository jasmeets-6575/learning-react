import React from "react";
import ReactDOM from "react-dom/client";

function Greeting(){
    return (
        <div>
        <div>
            <h3>Hello People</h3>
            <ul>
                <li>
                    <a href="#">Hello world</a>
                </li>
            </ul>
        </div>
        <h2>Hello world</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>);

