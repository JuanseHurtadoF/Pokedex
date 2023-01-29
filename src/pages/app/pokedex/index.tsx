import { NextPage } from "next";
import { Nav, Panel } from "@components";
import { useEffect, useState } from "react";
import Card from "@/components/reusable/pokemon/card";
import axios from "axios";
import styles from "@styles/pages/pokedex.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { loadPokemon } from "@/store/reducers";
import Pagination from "@/components/reusable/pagination";
// import { PokemonInfo } from "@/types";

const Pokedex: NextPage = () => {
  const allPokemon = useSelector(
    (state: RootState) => state.pokemon.allPokemon
  );
  const [loading, setLoading] = useState<boolean | null>(null);
  const [shownPokemon, setShownPokemon] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  const dispatch = useDispatch();

  const fetchPokemon = async () => {
    setLoading(true);
    const apiData = await axios.get("/api/getPokemon");
    dispatch(loadPokemon(apiData.data));
    setLoading(false);
  };

  const changePage = (goTo: number) => {
    setPage(goTo);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    setShownPokemon(allPokemon.slice(0, 8));
  }, [allPokemon]);

  useEffect(() => {
    const newPokemon = allPokemon.slice(8 * (page - 1), 8 * page);
    setShownPokemon(newPokemon);
  }, [page]);

  return (
    <>
      <Nav />
      <div className={styles.pokedexLayout}>
        <Panel />
        <div>
          <div>
            <div className={styles.pokemonContainer}>
              {loading && <p>Loading</p>}

              {!loading &&
                shownPokemon &&
                shownPokemon.map((item: any) => {
                  return <Card key={item.name} pokemon={item} />;
                })}
            </div>
          </div>
          <Pagination currentPage={page} changePage={changePage} />
        </div>
      </div>
    </>
  );
};

export default Pokedex;
