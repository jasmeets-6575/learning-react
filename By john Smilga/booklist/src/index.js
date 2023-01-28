import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Alex Michaelides",
    title: "THE SILENT PATIENT",
    img: "https://m.media-amazon.com/images/I/51oVTRsjcqL._SX329_BO1,204,203,200_.jpg",
    id: 1,
  },
  {
    author: "Oishik Majumdars",
    title: "Dhusar Jagat",
    img: "https://m.media-amazon.com/images/I/419UfMbI55L._SX319_BO1,204,203,200_.jpg",
    id: 2,
  },
  {
    author: "Will Smith",
    title: "Will",
    img: "https://m.media-amazon.com/images/I/51povAtTE5L._SX327_BO1,204,203,200_.jpg",
    id: 3,
  },
];

const BookList = () => {

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id}/>;
      })}
    </section>
  );
}


const Book = (props) => {
  const { img, title, author   } = props;
  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <button >Click Me</button>
      <h4>{author}</h4>
    </article>
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
