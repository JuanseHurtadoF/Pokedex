/* eslint-disable @next/next/no-img-element */
import styles from "@styles/sections/Hero.module.scss";
import typography from "@styles/typography/typography.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img
          alt="Pokemon logo"
          src="/assets/brand/logo.png"
          className={styles.logo}
        ></img>
        <h1 className={`${styles.title} ${typography.headingPrimary}`}>A modern-day Pokedex</h1>
        <p className={typography.textPrimary}>
          {`Record every Pokemon's sighting and stats. May the odds be in your favor on your quest to catch 'em all!`}
        </p>
      </div>
    </div>
  );
};

export default Hero;

// {`Record every Pokemons sighting and stats. May the odds be in your favor on your quest to catch 'em all!`}
