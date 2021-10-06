import createReducer from "../../../util/createReducer";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../../actionTypes";

const counter = createReducer(0, {
    [INCREMENT_COUNTER]: (state) => state + 1,
    [DECREMENT_COUNTER]: (state) => state - 1,
  },
);

export default counter;
