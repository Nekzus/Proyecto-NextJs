import Link from "next/link";
import styles from "./NavBar.module.css";



export const NavBar = () => {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};
