/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, useEffect } from "react";
import { ButtonMain } from "@/components";
import styles from "@styles/sections/Hero.module.scss";
import typography from "@styles/typography/typography.module.scss";
import { changeName } from "@actions/index";
import { useAppSelector, useAppDispatch } from "@/hooks";

const Hero: FunctionComponent = () => {
  const name = useAppSelector((state: any) => state.name);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img
          alt="Pokemon logo"
          src="/assets/brand/logo.png"
          className={styles.logo}
        ></img>
        <h1
          onClick={() => {
            dispatch(changeName('Gaby'))
          }}
          className={`${styles.title} ${typography.headingPrimary}`}
        >
          A modern-day Pokedex
        </h1>
        <p className={typography.textPrimary}>
          {`Record every Pokemon's sighting and stats. May the odds be in your favor on your quest to catch 'em all!`}
        </p>
        <div className={styles.buttonContainer}>
          <ButtonMain text="Catch'em All" linkTo="/app/pokedex" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// {`Record every Pokemons sighting and stats. May the odds be in your favor on your quest to catch 'em all!`}
