import { API } from "../../api";
import { LIKE_POST } from "../actionTypes";

export const toggleLikeAction = (dispatch) => (postId) => {
  dispatch({ type: LIKE_POST, payload: postId });
  API.togglePostLike({ postId });
};
