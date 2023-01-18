import styles from '@/styles/Home.module.scss'
import { Hero } from '@/components'


export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Hero />
      </main>
    </>
  )
}
