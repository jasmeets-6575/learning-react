const Book = (props) => {
  const { img, title, author,number } = props;
  console.log(number)
  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
<<<<<<< HEAD
      <span className="number"># {number +1 }</span>
=======
      <span className="number"># {number + 1 }</span>
>>>>>>> 1632a564e907f693a4a9e9d5e8e0f3f7bc2b5659
    </article>
  );
};
export default Book;
