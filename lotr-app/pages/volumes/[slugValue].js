import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function VolumeInfo() {
  const router = useRouter();
  const { slugValue } = router.query;
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slugValue);
  const currentVolume = volumes[volumeIndex];
  const prevVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];
  if (!currentVolume) {
    return <p>Volume not found</p>;
  }
  const { title, slug, books, description } = currentVolume;

  return (
    <>
      <head>
        <title>{title}</title>
      </head>
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
        src={`/images/${slug}.png`}
        alt={`Cover photo for ${title}`}
        height={230}
        width={140}
      ></Image>
      <br />
      {prevVolume && (
        <div>
          <Link href={`/volumes/${prevVolume.slug}`}>Prev</Link>
        </div>
      )}
      {nextVolume && (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>Next</Link>
        </div>
      )}
    </>
  );
}
