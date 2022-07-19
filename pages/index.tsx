import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cascade Riser Management
        </h1>

        <p className={styles.description}>
          Customer Service
          <code className={styles.code}>206.396.6864</code>
        </p>

        <p className={styles.description}>
          Fax
          <code className={styles.code}>800.537.9459</code>
        </p>

        <p className={styles.description}>
          Email
          <code className={styles.code}>service@cascaderisermanagement.com</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
