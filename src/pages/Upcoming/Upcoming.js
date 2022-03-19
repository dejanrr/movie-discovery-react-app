import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Movie from "../../components/Movie/Movie";
import "../../assets/css/global.css";

const Upcoming = () => {
  const {
    onMovieSelect,
    IMG_API,
    handleFavoriteMovie,
    upcomingMovies,
    upcomingMoviesPage,
    setUpcomingMoviesPage,
  } = useContext(MovieContext);

  useEffect(() => {
    document.title = "Upcoming Movies";
  }, []);

  return (
    <div className="movies-grid-container">
      <div className="movies-grid-wrapper">
        <div className="movies-page-header">
          <div className="movies-page-title">Top Rated Movies</div>
          <div className="movies-page-page-numbers">
            {typeof upcomingMoviesPage === "number" ? (
              <div>
                {upcomingMoviesPage > 1 ? (
                  <button
                    onClick={() =>
                      setUpcomingMoviesPage(upcomingMoviesPage - 1)
                    }
                  >
                    Previous
                  </button>
                ) : (
                  ""
                )}
                <span>{upcomingMoviesPage}</span>
                <button
                  onClick={() => setUpcomingMoviesPage(upcomingMoviesPage + 1)}
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
          {upcomingMovies?.length
            ? upcomingMovies.map((movie) => (
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

export default Upcoming;
