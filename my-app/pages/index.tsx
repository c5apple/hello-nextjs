import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  return {
    props: { title: '' }
  }
}

export default function Home() {

  const users = [{ id: 1 }, { id: 2 }];

  return (
    <>
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <Image src="/img/rob-potter-mMCkVTaE9Yw-unsplash.jpg" alt="" width={200} height={300} />

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>

        <Link
          href="/hoge"
          className={styles.card}
        >
          <h2>Next Page &rarr;</h2>
          <p>/hoge</p>
        </Link>

        <Link
          href="/fuga/piyo"
          className={styles.card}
        >
          <h2>Next Page &rarr;</h2>
          <p>/fuga/piyo</p>
        </Link>

        {users.map((user, index) => {
          return (
            <Link
              href={`/user/${user.id}`}
              className={styles.card}
              key={index}
            >
              <h2>aDynamic Routing &rarr;</h2>
              <p>/user/{user.id}</p>
            </Link>
          )
        })}

        <Link
          href="/user/2"
          className={styles.card}
        >
          <h2>Dynamic Routing &rarr;</h2>
          <p>/user/2</p>
        </Link>

        <Link
          href={{
            pathname: '/user/2/3',
            query: { name: '??????' },
          }}
          className={styles.card}
        >
          <h2>Dynamic Routing &rarr;</h2>
          <p>/user/2/3</p>
        </Link>
      </div>
    </>
  )
}
