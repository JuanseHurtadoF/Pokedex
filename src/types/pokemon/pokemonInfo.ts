import { PokemonType } from "..";
import { Stats } from "./stats";

export type PokemonInfo = {
  name: string;
  id: number;
  image: string;
  types: PokemonType[];
  stats: Stats[];
};
