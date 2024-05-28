import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Pete" />
      <Greeting name="Reka" />{" "}
    </div>
  );
}

export function Greeting({ name }) {
  return <h1>{name == "Pete" ? "Hello Coach" : `Hello ${name}`}</h1>;
}
