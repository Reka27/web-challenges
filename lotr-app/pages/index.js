import Link from "next/link";
import { volumes } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <h1>Lord of the rings</h1>
      <Link href="/volumes">All Volumes</Link>
    </>
  );
}
