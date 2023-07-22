import "./BookList.css";

const BookList = () => {   // List of All Books
  return (
    <section className="bookList">
      <Books />
      <Books />
      <Books />
    </section>
  );
};

const Books = () => { //  Books Component
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => { // Image of the Book
  return (
    <img
      src="https://m.media-amazon.com/images/I/51eHhm0XRmL._SX337_BO1,204,203,200_.jpg"
      alt="Twenty Years Later"
    />
  );
};

const Title = () => { // Title of the Book
  return <h1>Twenty Years Later</h1>;
};
 
const Author = () => { // Author of the Book
  return <h3>Charlie Don</h3>;
};


export default BookList