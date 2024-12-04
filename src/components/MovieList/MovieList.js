import { Favorite } from "../Favorite/Favorite";

const MovieList = ({ movies, favorites, setFavorites, toast }) => {
  const isFavorite = (movie) =>
    favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <>
      {movies?.map((movie) => (
        <div
          key={movie.imdbID}
          className="card image-container d-flex justify-content-start m-3"
          style={{
            width: "15rem",
            height: "30rem",
            background: "black",
            padding: "1rem",
          }}
        >
          <img
            src={movie.Poster}
            className="card-img-top"
            alt={movie.Title}
            style={{ objectFit: "cover", borderRadius: "5px", height: "15rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Release Year: {movie.Year}
            </h6>
            <Favorite
              movie={movie}
              isFavorite={isFavorite}
              setFavorites={setFavorites}
              toast={toast}
              favorites={favorites}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
