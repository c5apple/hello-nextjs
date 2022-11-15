import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1 className={styles.title}>
        Welcome to <Link href="/">Next.js!</Link>
      </h1>
    </header>
  );
}
