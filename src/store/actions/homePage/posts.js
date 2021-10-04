import {
  APPEND_POSTS,
  SET_POSTS,
  SET_POSTS_LOADING,
  SET_SEARCH_QUERY,
} from "../../actionTypes";
import { API } from "../../../api";
import {
  arePostsLoading,
  getPostList,
  getSearchQuery,
} from "../../selectors/homePage/posts";

const setPostsLoading = (dispatch) => (payload) =>
  dispatch({ type: SET_POSTS_LOADING, payload });

const fetchPosts =
  (dispatch, search) =>
  async ({ start = 0 } = {}) => {
    setPostsLoading(dispatch)(true);

    const data = await API.getPosts({ start, search });

    setPostsLoading(dispatch)(false);

    return data;
  };

export const fetchPostsAction = (dispatch, state) => async () => {
  // reset posts list
  dispatch({ type: SET_POSTS, payload: [] });

  const data = await fetchPosts(dispatch, getSearchQuery()(state))();

  dispatch({ type: SET_POSTS, payload: data });
};

export const fetchPostsNextPageAction = (dispatch, state) => async () => {
  if (arePostsLoading()(state)) {
    return;
  }

  const start = getPostList()(state).length;
  const data = await fetchPosts(dispatch, getSearchQuery()(state))({ start });

  dispatch({
    type: APPEND_POSTS,
    payload: data,
  });
};

export const setSearchQueryAction = (dispatch) => (payload) => {
  dispatch({
    type: SET_SEARCH_QUERY,
    payload,
  });
};

export const resetSearchAction = (dispatch) => async () => {
  dispatch({
    type: SET_SEARCH_QUERY,
    payload: "",
  });

  const data = await fetchPosts(dispatch, "")();

  dispatch({ type: SET_POSTS, payload: data });
};
