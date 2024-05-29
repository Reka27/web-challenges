import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      color: "Red",
      pricePerKg: 3.5,
      isInSeason: true,
    },
    {
      id: 2,
      name: "Banana",
      color: "Yellow",
      pricePerKg: 1.2,
      isInSeason: true,
    },
    {
      id: 3,
      name: "Cherry",
      color: "Red",
      pricePerKg: 7.0,
      isInSeason: false,
    },
    {
      id: 4,
      name: "Date",
      color: "Brown",
      pricePerKg: 6.5,
      isInSeason: true,
    },
    {
      id: 5,
      name: "Elderberry",
      color: "Purple",
      pricePerKg: 8.0,
      isInSeason: false,
    },
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Card
              name={fruit.name}
              color={fruit.color}
              price={fruit.pricePerKg}
              isInSeason={fruit.isInSeason}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
