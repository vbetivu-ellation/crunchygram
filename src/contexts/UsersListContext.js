import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { API } from "../api";

const UsersListContext = createContext({
  areUsersLoading: true,
  users: [],
  fetchUsers: () => {},
});

const UsersListProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    await API.getUsers().then(setData);

    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <UsersListContext.Provider value={{
      areUsersLoading: isLoading,
      users: data,
      fetchUsers: fetchData,
    }}>
      {children}
    </UsersListContext.Provider>
  );
};

UsersListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UsersListProvider };

export default UsersListContext;
