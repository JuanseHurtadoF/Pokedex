import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface PokemonState {
  name: string;
  types: string[];
  image: string;
}

const initialState: any = {
  allPokemon: [
    {
      name: "Juanse",
      types: ["fire", "water"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    },
  ],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state[0].name = action.payload;
    },
    changeTypes: (state) => {
      state[0].types = ["poison", "rock"];
    },
    loadPokemon: (state, action: PayloadAction<any>) => {
      state.allPokemon = action.payload
    },
  },
});

export const { changeName, changeTypes, loadPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
