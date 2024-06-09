import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function VolumeInfo() {
  const volumeIndex = volumes.findIndex(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );
  const currentVolume = volumes[volumeIndex];
  const prevVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];
  if (!currentVolume) {
    return <p>Volume not found</p>;
  }
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
        src={"/images/the-fellowship-of-the-ring.png"}
        alt={`Cover photo for ${title}`}
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
