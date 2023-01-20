// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/");

  res.status(200).json(pokemon.data)
}