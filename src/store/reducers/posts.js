import createReducer from "../../util/createReducer";
import {
  SET_POSTS,
  APPEND_POSTS,
  LIKE_POST,
  ADD_POST,
  COMMENT,
} from "../actionTypes";

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
          ? state[postId].likesCount - 1
          : state[postId].likesCount + 1,
        isUserLiked: !state[postId].isUserLiked,
      },
    }),
    [COMMENT]: (state, { payload: comment }) => ({
      ...state,
      [comment.postId]: {
        ...state[comment.postId],
        commentsCount: state[comment.postId].commentsCount + 1,
        comments: [...state[comment.postId].comments, comment],
      },
    }),
  }
);

export default postsById;
