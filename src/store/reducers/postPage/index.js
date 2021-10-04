import createReducer from "../../../util/createReducer";
import { SET_POST } from "../../actionTypes";

const postPage = createReducer(null, {
  [SET_POST]: (state, { payload }) => payload,
});

export default postPage;
