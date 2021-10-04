import createReducer from "../../../util/createReducer";
import { SET_CURRENT_USER } from "../../actionTypes";

const currentUser = createReducer(null, {
  [SET_CURRENT_USER]: (state, { payload }) => payload,
});

export default currentUser;
