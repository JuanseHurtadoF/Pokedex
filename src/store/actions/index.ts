import { PokemonInfo } from "@/types";
import axios from "axios";
import { Dispatch } from "redux";

// export function changeName(name: string) {
//   return function (dispatch: Dispatch) {
//     dispatch({
//       type: "CHANGE_NAME",
//       payload: name,
//     });
//   };
// }

// export async function fetchPokemon() {
//   return function (dispatch: Dispatch) {
//     axios
//       .get("/api/getPokemon")
//       .then((pokemon) => {
//         dispatch({
//           type: "FETCH_POKEMON",
//           payload: pokemon,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   };
