import PropTypes from "prop-types";
import { PostsProvider } from "./PostsContext";
import { UsersListProvider } from "./UsersListContext";

const HomePageProvider = ({children}) => {
  return (
    <PostsProvider>
      <UsersListProvider>
        {children}
      </UsersListProvider>
    </PostsProvider>
  );
};

HomePageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { HomePageProvider };
