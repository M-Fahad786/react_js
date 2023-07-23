import "./BookList.css"; //BookList CSS
const BookList = () => {
  // BookList Main Component
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  //Books Component
  const image =
    "https://m.media-amazon.com/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"; // Book Cover Image
  const title = "The 48 Laws of Power"; // Book Title
  const author = "Robert Greene"; // Book Author
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h3>{author}</h3
    </article>
  );
};

export default BookList;
