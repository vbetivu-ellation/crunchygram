import combineReducers from "../../../util/combineReducers";
import counter from "./counter";

const homePage = combineReducers({
  counter,
});

export default homePage;
