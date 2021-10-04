import createReducer from "../../../util/createReducer";
import { SET_POST, LIKE_POST } from "../../actionTypes";

const postPage = createReducer(null, {
  [SET_POST]: (state, { payload }) => payload,
  [LIKE_POST]: (state) => ({
    ...state,
    isUserLiked: !state.isUserLiked,
    likesCount: state.isUserLiked ? state.likesCount-- : state.likesCount++,
  }),
});

export default postPage;
