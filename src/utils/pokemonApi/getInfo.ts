import axios from "axios";

export const getPokemonInfo = async (url: string) => {
  const pokemonInfo = await axios.get(url);
  return pokemonInfo.data;
};
