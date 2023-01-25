// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PokemonInfo, Error } from "@types";
import { getTypes, getStats } from "@utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonInfo | Error>
) {
  const { id } = req.query;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const poke = response.data;
    const pokemonInfo = {
      name: poke.name,
      id: poke.id,
      types: getTypes(poke.types),
      image: poke.sprites.other.dream_world.front_default,
      stats: getStats(poke.stats),
    };
    return res.status(200).json(pokemonInfo);
  } catch (e) {

    console.log(e);
    return res
      .status(500)
      .json({ message: `There is no Pokemon with id ${id} in our database` });
  }
}
