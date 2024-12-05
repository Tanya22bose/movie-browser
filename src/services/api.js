const API_KEY = "67385054";
const BASE_URL = "https://www.omdbapi.com/";

export const getMovieRequest = async (searchValue, page) => {
  const url = `${BASE_URL}?s=${searchValue}&apikey=${API_KEY}&page=${page}&type=movie`;

  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Response === "True") {
      return {
        success: true,
        data: responseJson.Search,
        totalPages: responseJson.totalResults,
      };
    } else {
      return { success: false, error: responseJson.Error };
    }
  } catch (error) {
    return { success: false, error: "An unexpected error occurred" };
  }
};

export const fetchMovieByImdbID = async (imdbId) => {
  const url = `${BASE_URL}?i=${imdbId}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Response === "True") {
      return {
        Title: responseJson.Title,
        Year: responseJson.Year,
        imdbID: imdbId,
        Type: responseJson.Type || "movie",
        Poster: responseJson.Poster || "N/A",
      };
    }
    return { success: false, error: responseJson.Error };
  } catch (error) {
    return null;
  }
};

export const getTrendingMovies = async () => {
  const trendingMovieIds = [
    "tt0111161",
    "tt0068646",
    "tt0468569",
    "tt0050083",
    "tt0077869",
    "tt0108052",
    "tt0110912",
    "tt0137523",
    "tt1375666",
    "tt0076759",
  ];

  try {
    const results = await Promise.all(trendingMovieIds.map(fetchMovieByImdbID));
    return {
      success: true,
      data: results,
      totalPages: 10,
    };
  } catch (error) {
    return { success: false, error: "Failed to fetch trending movies" };
  }
};
