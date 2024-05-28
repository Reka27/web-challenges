import Image from "./components/Image";
import Link from ".components/Link";

export default function Logo({ logo, alt }) {
  return (
    <Link>
      <Image src={logo} alt={alt}></Image>
    </Link>
  );
}
