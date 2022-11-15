import { ReactElement } from 'react';
import Header from './header';
import Footer from './footer';
import styles from '../styles/Home.module.css'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}