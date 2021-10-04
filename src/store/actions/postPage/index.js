import { API } from "../../../api";
import { SET_POST } from "../../actionTypes";

const fetchPostAction = (dispatch) => async (id) => {
  const post = await API.getPost({ id });

  dispatch({ type: SET_POST, payload: post });
};

export { fetchPostAction };
