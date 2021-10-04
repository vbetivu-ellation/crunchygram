import createReducer from "../../../util/createReducer";
import { SET_USER, RESET_USER } from "../../actionTypes";

const postPage = createReducer(null, {
  [SET_USER]: (state, { payload }) => payload,
  [RESET_USER]: () => null,
});

export default postPage;
