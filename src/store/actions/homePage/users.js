import { SET_USERS, SET_USERS_LOADING } from "../../actionTypes";
import { API } from "../../../api";
import { getUserList } from "../../selectors/homePage/users";

const setUsersLoading = (dispatch) => (payload) =>
  dispatch({ type: SET_USERS_LOADING, payload });

export const fetchUsersAction = (dispatch, state) => async () => {
  if (getUserList()(state).length) {
    return;
  }

  setUsersLoading(dispatch)(true);
  const data = await API.getUsers();

  dispatch({ type: SET_USERS, payload: data });
  setUsersLoading(dispatch)(false);
};
