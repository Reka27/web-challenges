import "./styles.css";

import logo from "./img/logo.jpg";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Image from "./components/Image";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Link href="#">
          <Image src={logo} alt="logo"></Image>
        </Link>
        <Navigation>
          <Link href="#home"> Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
