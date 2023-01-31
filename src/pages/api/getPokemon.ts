import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { Collection, Db, Document, MongoClient } from "mongodb";
import { Error } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Document | Error>
) {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("pokedex");
    const collection: Collection = db.collection("pokemon");
    const allPokemon = await collection.find().toArray();

    res.status(200).json(allPokemon);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: `Our PokeServers are suffering a cyberattack from Team Rocket! Please come back later!`,
    });
  }
}
