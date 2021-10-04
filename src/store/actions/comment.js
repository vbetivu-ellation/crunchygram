import { API } from "../../api";
import { COMMENT } from "../actionTypes";

export const commentAction =
  (dispatch) =>
  async ({ postId, text }) => {
    let comment = await API.createComment({ postId, text });

    dispatch({
      type: COMMENT,
      payload: comment,
    });
  };
