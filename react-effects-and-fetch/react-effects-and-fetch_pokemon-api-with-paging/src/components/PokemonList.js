import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url, prevPage, nextPage]);

  const handleNextPage = () => {
    setUrl(nextPage);
  };
  const handlePrevPage = () => {
    setUrl(prevPage);
  };
  console.log(prevPage);
  return (
    <main>
      {prevPage && (
        <button type="button" onClick={handlePrevPage}>
          Previous Page
        </button>
      )}
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
