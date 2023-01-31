import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { PokemonInfo, PokemonType } from "@/types";
import { stat } from "fs";

export interface PokemonState {
  name: string;
  types: string[];
  image: string;
}

const initialState: any = {
  allPokemon: [],
  filteredPokemon: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadPokemon: (state, action: PayloadAction<PokemonInfo>) => {
      state.allPokemon = action.payload;
      state.filteredPokemon = action.payload;
    },
    searchPokemon: (state, action: PayloadAction<string>) => {
      // need to change this when implementing filters
      const toSearch = current(state.allPokemon);
      const results = toSearch.filter((poke: PokemonInfo) =>
        poke.name.includes(action.payload.toLowerCase())
      );
      state.filteredPokemon = results;
    },
    filterPokemon: (state, action: PayloadAction<PokemonType[]>) => {
      const toFilter = current(state.allPokemon);
      let filtered: PokemonInfo[] = [];
      action.payload.forEach((item: PokemonType) => {
        filtered = [
          ...filtered,
          ...toFilter.filter((poke: PokemonInfo) => poke.types.includes(item)),
        ];
      });
      state.filteredPokemon = filtered;
    },
  },
});

export const { loadPokemon, searchPokemon, filterPokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
