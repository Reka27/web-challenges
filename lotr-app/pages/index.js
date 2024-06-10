import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function handleButtonClick() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <head>
        <title>Overview</title>
      </head>
      <h1>Lord of the rings</h1>
      <Link href="/volumes">All Volumes</Link>
      <br />
      <button onClick={handleButtonClick}>RandomPage</button>
    </>
  );
}
