import { NextPage } from "next";
import { Nav } from "@components";
import { useEffect, useState } from "react";
import Card from "@/components/reusable/pokemon/card";
import axios from "axios";
import styles from "@styles/pages/pokedex.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { loadPokemon } from "@/store/reducers";
// import { PokemonInfo } from "@/types";

const Pokedex: NextPage = () => {
  const allPokemon = useSelector(
    (state: RootState) => state.pokemon.allPokemon
  );
  const [loading, setLoading] = useState<boolean | null>(null);
  const [shownPokemon, setShownPokemon] = useState<any>([]);

  const dispatch = useDispatch();

  const fetchPokemon = async () => {
    setLoading(true);
    const apiData = await axios.get("/api/getPokemon");
    dispatch(loadPokemon(apiData.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    setShownPokemon(allPokemon.slice(0, 8));
  }, [allPokemon]);

  // useEffect(() => {
  //   setShownPokemon(shownPokemon.slice(0, 8));
  // }, [allPokemon]);

  return (
    <div>
      <Nav />
      <div className={styles.pokemonContainer}>
        {loading && <p>Loading</p>}

        {!loading &&
          shownPokemon &&
          shownPokemon.map((item: any) => {
            return <Card key={item.name} pokemon={item} />;
          })}
      </div>
    </div>
  );
};

export default Pokedex;
