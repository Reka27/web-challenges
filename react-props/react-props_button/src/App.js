import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Hi there!");
  }
  return (
    <div>
      <Button
        color="black"
        disabled={false}
        text="Click Me"
        backgroundColor="yellow"
        onClick={handleClick}
      />
    </div>
  );
}
export function Button({ color, disabled, text, backgroundColor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        height: "30px",
        color: color,
        backgroundColor: backgroundColor,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
