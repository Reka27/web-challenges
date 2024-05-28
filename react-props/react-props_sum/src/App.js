import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={5} valueB={10} />;
}

export function Sum({ valueA, valueB }) {
  return (
    <div>
      <h1>
        Sum : {valueA}+{valueB} ={valueA + valueB};
      </h1>
    </div>
  );
}
