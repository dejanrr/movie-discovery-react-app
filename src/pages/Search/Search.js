import { useContext } from "react";
import Movie from "../../components/Movie/Movie";
import { MovieContext } from "../../Context/MovieContext";

import "../../assets/css/global.css";

const Search = () => {
  const { selectedMovie, onMovieSelect, movies } = useContext(MovieContext);

  return (
    <div className="search-container">
      <div className="movies-container">
        {movies?.length
          ? movies.map((movie) => (
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
  );
};

export default Search;
