import { PokemonInfo } from "@/types";
import { FunctionComponent } from "react";

type Props = {
  pokemon: PokemonInfo;
};

const Card: FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card;
