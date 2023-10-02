import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article>
      <h2>Title</h2>
      <Author />
      <Image />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/61YtapiaanL._SL1200_.jpg"
      alt="Going Infinite"
    />
  );
};
const Author = () => {
  return (
    <section>
      <h4>Michael Lewis</h4>
    </section>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
