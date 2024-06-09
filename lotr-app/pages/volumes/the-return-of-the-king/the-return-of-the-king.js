import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function VolumeInfo() {
  const volumeIndex = volumes.findIndex(
    (volume) => volume.slug === "the-return-of-the-king"
  );
  const currentVolume = volumes[volumeIndex];
  const prevVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];
  const { title, books, description } = currentVolume;

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ title, ordinal }) => (
          <li key={title}>
            {ordinal} - {title}
          </li>
        ))}
      </ul>
      <Image
        src={"/images/the-return-of-the-king.png"}
        alt={`Cover Page of ${title}`}
        height={230}
        width={140}
      ></Image>
      <br />
      {prevVolume && (
        <div>
          <Link href={`/volumes/${prevVolume.slug}/${prevVolume.slug}`}>
            Prev
          </Link>
        </div>
      )}
      {nextVolume && (
        <div>
          <Link href={`/volumes/${nextVolume.slug}/${nextVolume.slug}`}>
            Next
          </Link>
        </div>
      )}
    </>
  );
}
