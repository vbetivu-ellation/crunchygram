import combineReducers from "../../../util/combineReducers";
import posts from "./posts";
import users from "./users";

const homePage = combineReducers({
  posts,
  users,
});

export default homePage;
