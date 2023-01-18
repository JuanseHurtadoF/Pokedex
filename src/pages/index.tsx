import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { Hero } from '@/components'


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  )
}
