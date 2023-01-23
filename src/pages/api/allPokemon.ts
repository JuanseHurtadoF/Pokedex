// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PokemonInfo, Error } from "@/types";
import { getPokemonInfo, getTypes, getStats } from "@/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonInfo[] | Error>
) {
  try {
    const initialRequest = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=36"
    );
    const listOfPokemon = initialRequest.data.results;
    let allPokemon: PokemonInfo[] = [];

    for (let i = 0; i < listOfPokemon.length; i++) {
      const poke = await getPokemonInfo(listOfPokemon[i].url);
      const fileredPokemonInfo = {
        name: poke.name,
        id: poke.id,
        types: getTypes(poke.types),
        image: poke.sprites.other.dream_world.front_default,
        stats: getStats(poke.stats),
      };
      allPokemon.push(fileredPokemonInfo);
    }

    return res.status(200).json(allPokemon);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: `Our PokeServers are suffering a cyberattack from Team Rocket! Please come back later!`,
    });
  }
}
