/* the API key is exposed intentionally for demo purpose, 
since we are not maintaining .env file right now */
const API_KEY = "67385054";
const BASE_URL = "http://www.omdbapi.com/";

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
      return { success: false, error: responseJson.Error || "No movies found" };
    }
  } catch (error) {
    return { success: false, error: "An unexpected error occurred" };
  }
};
