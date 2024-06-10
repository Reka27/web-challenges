import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import Head from "next/head";

export default function Volumes() {
  return (
    <>
      <Head>
        <title>Volumes</title>
      </Head>
      <h1>Lord of the rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>

      <ul>
        {volumes.map((volume) => (
          <li key={volume.title}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
