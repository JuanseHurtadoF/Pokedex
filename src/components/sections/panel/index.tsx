import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { searchPokemon, filterPokemon } from "@/store/reducers";
import { CheckBox } from "@/components";
import { pokemonTypes } from "@/lib/constants";
import styles from "@styles/sections/Panel.module.scss";
import { PokemonType } from "@/types";
import { removeFromArray } from "@/utils";

const Panel: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [typesFilter, setTypesFilter] = useState<PokemonType[]>([]);

  const filteredPokemon = useSelector(
    (state: RootState) => state.pokemon.filteredPokemon
  );

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newType = e.target.value as PokemonType;
    if (typesFilter.includes(newType)) {
      const index = typesFilter.indexOf(newType);
      const newArray = removeFromArray(typesFilter, index);
      setTypesFilter(newArray as PokemonType[]);
    } else {
      setTypesFilter((prev) => [...prev, newType]);
    }
  };

  useEffect(() => {
    dispatch(filterPokemon(typesFilter));
  }, [typesFilter]);

  useEffect(() => {
    dispatch(searchPokemon(searchValue));
  }, [searchValue]);

  return (
    <div className={styles.container}>
      {/* Search bar */}
      <div className={styles.searchBarContainer}>
        <input
          onChange={handleChange}
          value={searchValue}
          placeholder="Search..."
          className={styles.searchBar}
        ></input>
      </div>

      {/* Type filter */}
      <div className={styles.typesContainer}>
        <p>Filter by type:</p>
        <div className={styles.checkBoxContainer}>
          {pokemonTypes.map((type: PokemonType) => {
            return (
              <div className={styles.checkbox} key={type}>
                <CheckBox onChangeFuntion={handleCheckChange} type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Panel;
