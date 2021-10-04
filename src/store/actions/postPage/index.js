import { API } from "../../../api";
import { ADD_POST } from "../../actionTypes";

export const fetchPostAction = (dispatch) => async (id) => {
  const post = await API.getPost({ id });

  dispatch({ type: ADD_POST, payload: post });
};
