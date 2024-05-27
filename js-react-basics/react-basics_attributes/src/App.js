import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}
export function Article() {
  return (
    <article>
      <h1 className="article__title">Hello World</h1>
      <label htmlFor="my_namet">Your Name:</label>
      <input id="my_name" type="text" value=" " minLength={5} />
      <label htmlFor="my_query">Your Name:</label>
      <input id="my_query" type="text" value=" " minLength={5} />
      <a className="article__link" href="https://www.wikipedia.org/">
        Visit Wiki Page
      </a>
    </article>
  );
}
