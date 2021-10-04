import createReducer from "../../../util/createReducer";
import { SET_USER } from "../../actionTypes";

const postPage = createReducer(null, {
  [SET_USER]: (state, { payload }) => payload,
});

export default postPage;
