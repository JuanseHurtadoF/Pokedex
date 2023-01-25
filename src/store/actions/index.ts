import { Dispatch } from "redux";

export function changeName(name: string) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: "CHANGE_NAME",
      payload: name,
    });
  };
}
