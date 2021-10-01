import debounce from "../../util/debounce";
import { useCallback, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  const handleScroll = useCallback(() => {
    const isNearTheBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 200;
    if (isNearTheBottom) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    const debouncedHandler = debounce(handleScroll);

    window.addEventListener("scroll", debouncedHandler);

    return () => window.removeEventListener("scroll", debouncedHandler);
  }, [handleScroll]);
};

export default useInfiniteScroll;
