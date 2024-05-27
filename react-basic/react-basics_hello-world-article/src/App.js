import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}
export function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>It is a test message</p>
    </article>
  );
}
