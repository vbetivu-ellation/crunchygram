import createReducer from "../../../util/createReducer";
import {
  APPEND_POSTS,
  // LIKE_HOME_POST,
  SET_POSTS,
  SET_POSTS_LOADING,
  SET_SEARCH_QUERY,
} from "../../actionTypes";

const posts = createReducer(
  {
    loading: true,
    searchQuery: "",
    list: [],
  },
  {
    [SET_POSTS]: (state, { payload }) => ({
      ...state,
      list: payload.map(({ id }) => id),
    }),
    [APPEND_POSTS]: (state, { payload }) => ({
      ...state,
      list: [...state.list, ...payload.map(({ id }) => id)],
    }),
    [SET_POSTS_LOADING]: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    [SET_SEARCH_QUERY]: (state, { payload }) => ({
      ...state,
      searchQuery: payload,
    }),
  }
);

export default posts;
