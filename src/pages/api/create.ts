import clientPromise from "@/lib/mongodb";
import { PokemonInfo, Error } from "@/types";
import { Collection, Db, Document, MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

interface ExtendedApiRequest extends NextApiRequest {
  body: PokemonInfo;
}

export default async function handler(
  req: ExtendedApiRequest,
  res: NextApiResponse<PokemonInfo | Error>
) {
  if (!req.body)
    return res.status(500).json({ message: "No pokemon was provided" });

  const client: MongoClient = await clientPromise;
  const db: Db = client.db("pokedex");
  const collection: Collection = db.collection("pokemon");

  collection.insertOne(req.body);
  res.status(200).json(req.body);
}
