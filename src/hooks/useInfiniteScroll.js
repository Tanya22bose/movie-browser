import { useEffect, useState } from "react";

const useInfiniteScroll = (fetchMore) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !isFetching
      ) {
        setIsFetching(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    fetchMore().finally(() => setIsFetching(false));
  }, [isFetching, fetchMore]);

  return [isFetching];
};

export default useInfiniteScroll;
