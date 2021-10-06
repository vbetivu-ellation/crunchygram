import { useCallback, useContext } from "react";
import { StoreContext } from "../store";

const useAction = (action) => {
  const [store, dispatch] = useContext(StoreContext);

  return useCallback(
    (...args) => action(dispatch, store)(...args),
    [action, store, dispatch],
  );
};

export default useAction;
