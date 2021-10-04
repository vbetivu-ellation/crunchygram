import { API } from "../../../api";
import { SET_POST, LIKE_POST } from "../../actionTypes";

export const fetchPostAction = (dispatch) => async (id) => {
  const post = await API.getPost({ id });

  dispatch({ type: SET_POST, payload: post });
};

export const toggleLikeAction = (dispatch) => (postId) => {
  dispatch({ type: LIKE_POST });
  API.togglePostLike({ postId });
};
