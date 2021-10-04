import { API } from "../../../api";
import { SET_CURRENT_USER } from "../../actionTypes";

export const loginUserAction = (dispatch) => async (username) => {
  const data = await API.login({ username });

  dispatch({ type: SET_CURRENT_USER, payload: data });
  return data;
};

export const fetchMeAction = (dispatch) => async () => {
  const data = await API.getMe();

  dispatch({ type: SET_CURRENT_USER, payload: data });
  return data;
};

export const logOutAction = () => async () => {
  await API.logout();
  window.location.reload();
};
