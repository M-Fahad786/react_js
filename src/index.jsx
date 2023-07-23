import React from "react";
import ReactDOM from "react-dom/client";
import BookList from "./BookList/BookList";

const App = () => {
  return (
    <>
      <BookList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
