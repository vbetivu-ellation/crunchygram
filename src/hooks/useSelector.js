import { useContext, useMemo } from "react";
import { StoreContext } from "../store";

const useSelector = (selector) => {
  const [store] = useContext(StoreContext);

  return useMemo(() => selector(store), [store, selector]);
};

export default useSelector;
