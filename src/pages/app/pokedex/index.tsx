import { NextPage } from "next";
import { Nav } from "@components";
import { useEffect, useState } from "react";
import Card from "@/components/reusable/pokemon/card";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeTypes,
  loadPokemon,
} from "@/store/reducers";
import type { RootState } from "@/store";
import axios, { all } from "axios";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { PokemonInfo } from "@/types";

const Pokedex: NextPage = () => {
  const [allPokemon, setAllPokemon] = useState<any>([]);

  const fetchPokemon = async () => {
    const apiData = await axios.get('/api/getPokemon')
    console.log(apiData.data)
    setAllPokemon(apiData.data.slice(0, 8))
  }

  useEffect(() => {
    fetchPokemon();
  }, [])

  // useEffect(() => {
    
  // }, [allPokemon])

  const testing = [
    {
      name: "Juanse",
      types: ["fire", "water"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    },
    {
      name: "Test",
      types: ["poison", "rock"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    },
  ]

  const pokemon = useSelector((state: RootState)=> state.pokemon.allPokemon);
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      {allPokemon && allPokemon.map((item: any) => {
        return <Card key={item.name} pokemon={item} />;
      })}
    </div>
  );
};

export default Pokedex;
