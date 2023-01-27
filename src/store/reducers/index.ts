import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface PokemonState {
  name: string;
  types: string[];
  image: string;
}

const initialState: any = {
  allPokemon: [],
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
