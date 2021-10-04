import createReducer from "../../../util/createReducer";
import {
  APPEND_POSTS,
  LIKE_HOME_POST,
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
      list: payload,
    }),
    [APPEND_POSTS]: (state, { payload }) => ({
      ...state,
      list: [...state.list, ...payload],
    }),
    [SET_POSTS_LOADING]: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    [SET_SEARCH_QUERY]: (state, { payload }) => ({
      ...state,
      searchQuery: payload,
    }),
    [LIKE_HOME_POST]: (state, { payload }) => ({
      ...state,
      list: state.list.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            likesCount: item.isUserLiked
              ? item.likesCount--
              : item.likesCount++,
            isUserLiked: !item.isUserLiked,
          };
        } else {
          return item;
        }
      }),
    }),
  }
);

export default posts;
