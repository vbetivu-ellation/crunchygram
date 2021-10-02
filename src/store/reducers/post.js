import createReducer from "../../util/createReducer";
import { APPEND_POSTS, SET_POSTS, SET_POSTS_LOADING, SET_SEARCH_QUERY } from "../actionTypes";

const post = createReducer({
  loading: true,
  searchQuery: "",
  list: [],
}, {
  [SET_POSTS]: (state, {payload}) => ({
    ...state,
    list: payload,
  }),
  [APPEND_POSTS]: (state, {payload}) => ({
    ...state,
    list: [...state.list, ...payload],
  }),
  [SET_POSTS_LOADING]: (state, {payload}) => ({
    ...state,
    loading: payload,
  }),
  [SET_SEARCH_QUERY]: (state, {payload}) => ({
    ...state,
    searchQuery: payload,
  }),
});

export default post;
