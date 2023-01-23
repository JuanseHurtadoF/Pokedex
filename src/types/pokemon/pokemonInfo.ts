import { Stats } from "./stats";

export type PokemonInfo = {
  name: string;
  id: number;
  image: string;
  types: string[];
  stats: Stats;
};
