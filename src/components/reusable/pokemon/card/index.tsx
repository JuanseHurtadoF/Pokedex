/* eslint-disable @next/next/no-img-element */
import { PokemonInfo, PokemonType } from "@/types";
import { FunctionComponent } from "react";
import styles from "@styles/reusable/pokemon/Card.module.scss";
import typography from "@styles/typography/typography.module.scss";
import Tag from "../tag";

type Props = {
  pokemon: PokemonInfo;
};

const Card: FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          alt={`${pokemon.name} image`}
          src={pokemon.image}
        ></img>
      </div>
      <div className={styles.infoContainer}>
        <p className={typography.pokemonName}>{pokemon.name}</p>
        <div className={styles.tagContainer}>
          {pokemon.types?.map((item: PokemonType, index) => {
            return (
              <div key={index}>
                <Tag type={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
