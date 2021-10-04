import { API } from "../../../api";
import { SET_USER } from "../../actionTypes";

export const fetchUserAction = (dispatch) => async (username) => {
  const user = await API.getUserByUsername({ username });

  dispatch({ type: SET_USER, payload: user });
};
