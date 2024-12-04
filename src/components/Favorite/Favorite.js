import { FaHeart, FaRegHeart } from "react-icons/fa"; // For heart icons

export const Favorite = ({
  movie,
  isFavorite,
  setFavorites,
  toast,
  favorites,
}) => {
  const addFavorite = () => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    toast.success(`${movie.Title} added to favorites!`);
  };

  const removeFavorite = () => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    toast.info(`${movie.Title} removed from favorites.`);
  };

  return (
    <button
      className={`btn mt-2 ${
        isFavorite(movie) ? "btn-danger" : "btn-outline-danger"
      }`}
      onClick={() => {
        isFavorite(movie) ? removeFavorite(movie) : addFavorite(movie);
      }}
      title={isFavorite(movie) ? "Remove from Favorites" : "Add to Favorites"}
    >
      {isFavorite(movie) ? (
        <FaHeart style={{ marginRight: "8px" }} />
      ) : (
        <FaRegHeart style={{ marginRight: "8px" }} />
      )}
      {isFavorite(movie) ? "Remove" : "Add"}
    </button>
  );
};
