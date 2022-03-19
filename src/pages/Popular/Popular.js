import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Movie from "../../components/Movie/Movie";
import "../../assets/css/global.css";

const Popular = () => {
  const {
    popularMovies,
    onMovieSelect,
    handleFavoriteMovie,
    popularMoviesPage,
    setPopularMoviesPage,
    movies,
  } = useContext(MovieContext);

  useEffect(() => {
    document.title = "Popular Movies";
  }, []);

  return (
    <div className="movies-grid-container">
      <div className="movies-grid-wrapper">
        <div className="movies-page-header">
          <div className="movies-page-title">Popular Movies</div>
          <div className="movies-page-page-numbers">
            {typeof popularMoviesPage === "number" ? (
              <div>
                {popularMoviesPage > 1 ? (
                  <button
                    onClick={() => setPopularMoviesPage(popularMoviesPage - 1)}
                  >
                    Previous
                  </button>
                ) : (
                  ""
                )}
                <span>{popularMoviesPage}</span>
                <button
                  onClick={() => setPopularMoviesPage(popularMoviesPage + 1)}
                >
                  Next
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="movies-container">
          {popularMovies?.length
            ? popularMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  {...movie}
                  movie={movie}
                  onMovieSelect={onMovieSelect}
                />
              ))
            : "No results found"}
        </div>
      </div>
    </div>
  );
};

export default Popular;
