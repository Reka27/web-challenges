console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.results);
  const dataWithName = data.results.filter((person) => person.name == "R2-D2");
  console.log(dataWithName[0]["eye_color"]);
}

fetchData();
