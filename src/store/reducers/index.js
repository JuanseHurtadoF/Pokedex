const initialState = {
  name: "Juanse",
  id: 1,
  image: "image",
  types: ["fire", "rock"],
  stats: [
    {
      name: "hp",
      value: 50,
    },
    {
      name: "defense",
      value: 55,
    },
    {
      name: "attack",
      value: 70,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}
