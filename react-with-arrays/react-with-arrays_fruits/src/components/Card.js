import "./Card.css";

export default function Card({ name, color, price, isInSeason }) {
  return (
    <>
      <h1> {name}</h1>
      <p className="card" style={{ backgroundColor: color }}>
        {color}
      </p>
      <p className="card">{price}</p>
      <p className="card">{isInSeason ? "In Season" : "No season"}</p>
    </>
  );
}
