import { API } from "../../../api";
import { SET_USER, RESET_USER } from "../../actionTypes";

export const fetchUserAction = (dispatch) => async (username) => {
  dispatch({ type: RESET_USER });

  const user = await API.getUserByUsername({ username });

  dispatch({ type: SET_USER, payload: user });
};
