import createReducer from "../../util/createReducer";
import { SET_POSTS, APPEND_POSTS, LIKE_POST, ADD_POST } from "../actionTypes";

const addElements = (state, { payload }) =>
  payload.reduce((acc, elem) => ({ ...acc, [elem.id]: elem }), state);

const postsById = createReducer(
  {},
  {
    [SET_POSTS]: addElements,
    [APPEND_POSTS]: addElements,
    [ADD_POST]: (state, { payload }) => ({
      ...state,
      [payload.id]: payload,
    }),
    [LIKE_POST]: (state, { payload: postId }) => ({
      ...state,
      [postId]: {
        ...state[postId],
        likesCount: state[postId].isUserLiked
          ? state[postId].likesCount--
          : state[postId].likesCount++,
        isUserLiked: !state[postId].isUserLiked,
      },
    }),
  }
);

export default postsById;
