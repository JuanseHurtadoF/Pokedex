import styles from "@/styles/Home.module.scss";
import { Hero, Nav } from "@/components";
import Head from "next/head";
import { NextPage } from "next";

const Home : NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <Nav />
        <Hero />
      </main>
    </>
  );
}

export default Home;
