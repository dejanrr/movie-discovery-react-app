import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Movie from "../../components/Movie/Movie";
import "../../assets/css/global.css";

const TopRated = () => {
  const {
    topRatedMovies,
    onMovieSelect,
    IMG_API,
    handleFavoriteMovie,
    topRatedMoviesPage,
    setTopRatedMoviesPage,
  } = useContext(MovieContext);

  useEffect(() => {
    document.title = "Top Rated Movies";
  }, []);

  return (
    <div className="movies-grid-container">
      <div className="movies-grid-wrapper">
        <div className="movies-page-header">
          <div className="movies-page-title">Top Rated Movies</div>
          <div className="movies-page-page-numbers">
            {typeof topRatedMoviesPage === "number" ? (
              <div>
                {topRatedMoviesPage > 1 ? (
                  <button
                    onClick={() =>
                      setTopRatedMoviesPage(topRatedMoviesPage - 1)
                    }
                  >
                    Previous
                  </button>
                ) : (
                  ""
                )}
                <span>{topRatedMoviesPage}</span>
                <button
                  onClick={() => setTopRatedMoviesPage(topRatedMoviesPage + 1)}
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
          {topRatedMovies?.length
            ? topRatedMovies.map((movie) => (
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

export default TopRated;
