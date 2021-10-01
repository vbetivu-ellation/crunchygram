import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { API } from "../api";

const PostsContext = createContext({
  search: "",
  setSearch: () => {},
  isLoading: true,
  setIsLoading: () => {},
  data: [],
  setData: () => {},
  fetchPosts: () => {},
  appendData: () => {},
});

const PostsProvider = ({children}) => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const appendData = useCallback((newData) => {
    setData([...data, ...newData]);
  }, [setData, data]);

  const fetchPosts = useCallback(async ({start = 0} = {}) => {
    setIsLoading(true);

    const data = await API.getPosts({start, search});

    setIsLoading(false);

    return data;
  }, [setIsLoading, search]);

  return (
    <PostsContext.Provider value={{
      search,
      setSearch,
      isLoading,
      data,
      setData,
      fetchPosts,
      appendData,
      setIsLoading,
    }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PostsProvider };

export default PostsContext;
