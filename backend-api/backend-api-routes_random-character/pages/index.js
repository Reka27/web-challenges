import useSWR from "swr";

export default function HomePage() {
  const { data: character, isLoading } = useSWR("/api/random-character");
  if (isLoading) {
    return <h1> Loading...</h1>;
  }
  console.log(character);
  if (!character) {
    return;
  }
  return (
    <>
      <h3>
        Name: {character.firstName}
        {character.lastName}
      </h3>
      <p>Age:{character.age}</p>
      <p>Gender:{character.gender}</p>
      <p>Twitter Name: {character.twitterName}</p>
      <p>Geohash:{character.geohash}</p>
    </>
  );
}
