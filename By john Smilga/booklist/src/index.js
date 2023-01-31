import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {books} from "./books"
import Book from "./Book";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};



// const EventExamples = () => {

//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted");
//   };

//   return (
//     <section>
//       <form >
//         <h2>Typical form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={(e=> console.log(e.target.value) )}
//           style={{ margin: "1rem 0" }}
//          />
//       </form>
//       <button onClick={()=> console.log("click me")}>Click Me</button>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
