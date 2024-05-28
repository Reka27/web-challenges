import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me</Button>
      <Button>Close</Button>
      <Button>Next</Button>
      <Button>Prev</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
