import { getMovieRequest } from "./../services/api";
export const fetchMoreMovies = async (
  totalPages,
  page,
  setMovies,
  setFilteredMovies,
  setPage,
  toast,
  debouncedSearchValue
) => {
  if (totalPages && page > totalPages) return;

  const result = await getMovieRequest(debouncedSearchValue, page);

  if (result.success && result.data) {
    setMovies((prevMovies) => [...prevMovies, ...result.data]);
    setFilteredMovies((prevMovies) => [...prevMovies, ...result.data]);
    setPage((prevPage) => prevPage + 1);
  } else {
    toast.error(result.error);
  }
};

export const fetchInitialMovies = async (
  debouncedSearchValue,
  setFilteredMovies,
  setMovies,
  setPage,
  setTotalPages,
  toast
) => {
  if (debouncedSearchValue === "") {
    setFilteredMovies([]);
    setMovies([]);
    return;
  }
  const result = await getMovieRequest(debouncedSearchValue, 1);

  if (result.success && result.data) {
    setMovies(result.data);
    setFilteredMovies(result.data);
    setPage(2);
    setTotalPages(Math.ceil(result.totalPages / 10));
  } else {
    toast.error(result.error);
  }
};
