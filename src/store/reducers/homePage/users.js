import createReducer from "../../../util/createReducer";
import { SET_USERS, SET_USERS_LOADING } from "../../actionTypes";

const users = createReducer(
  {
    loading: true,
    list: [],
  },
  {
    [SET_USERS]: (state, { payload }) => ({
      ...state,
      list: payload,
    }),
    [SET_USERS_LOADING]: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
  }
);

export default users;
