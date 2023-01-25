import Head from "next/head";
import { NextPage } from "next";
import { Nav } from "@components";
import { useEffect } from "react";
import Card from "@/components/reusable/pokemon/card";
import { useAppSelector } from "@/hooks";

const Pokedex: NextPage = () => {
  const pokemon = useAppSelector((state) => state);

  useEffect(() => {
    console.log(pokemon);
  }, []);

  return (
    <div>
      <Nav />
      <Card pokemon={pokemon} />
    </div>
  );
};

export default Pokedex;
