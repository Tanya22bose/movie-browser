import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YearFilter from "../components/Filters";
import MovieList from "../components/MovieList/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox/SearchBox";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useDebounce from "../utils/debounce";
import { fetchInitialMovies, fetchMoreMovies } from "../utils/fetchMovies";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("trending");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  const debouncedSearchValue = useDebounce(searchValue.trim(), 300);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMovies"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    fetchInitialMovies(
      debouncedSearchValue,
      setFilteredMovies,
      setMovies,
      setPage,
      setTotalPages
    );
  }, [debouncedSearchValue]);

  const [isFetching] = useInfiniteScroll(() =>
    fetchMoreMovies(
      totalPages,
      page,
      setMovies,
      setFilteredMovies,
      setPage,
      toast,
      debouncedSearchValue
    )
  );

  const handleYearChange = (year) => {
    setSelectedYear(year);
    if (year) {
      const filtered = movies.filter(
        (movie) => movie.Year && movie.Year.includes(year)
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  };

  return (
    <div className="container-fluid movie-app">
      <ToastContainer />
      <div className="row mt-4 mb-4">
        <div className="col d-flex flex-column flex-md-row align-items-center justify-content-between mx-2">
          <MovieListHeading heading="Movies" />
          <div className="d-flex flex-column flex-sm-row align-items-center gap-2 mt-3 mt-md-0">
            <YearFilter
              movies={movies}
              selectedYear={selectedYear}
              onYearChange={handleYearChange}
            />
            <SearchBox value={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>
      </div>

      {movies?.length || filteredMovies?.length ? (
        <div className="d-flex flex-wrap justify-content-center">
          <MovieList
            movies={filteredMovies ?? movies}
            favorites={favorites}
            setFavorites={setFavorites}
            toast={toast}
          />
        </div>
      ) : (
        <div className="text-center mt-3">
          <p>No Movies Found!</p>
        </div>
      )}

      {isFetching && (
        <div className="text-center mt-3">
          <p>Loading more movies...</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
