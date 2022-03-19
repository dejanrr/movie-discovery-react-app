import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";

import "./movie.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, id, movie, vote_average, overview }) => {
  const { onMovieSelect, favorites, setFavorites, handleFavoriteMovie } =
    useContext(MovieContext);

  const handleClick = () => {
    onMovieSelect(id);
  };

  return (
    <div onClick={handleClick} className="movie">
      <Link to="/movieinfo">
        <img src={IMG_API + poster_path} alt={title} />
      </Link>
      <div className="movie-card">
        <span className="movie-card-title">{title}</span>
        <span className="movie-rating">{vote_average}</span>
      </div>
      <div className="movie-over">
        
      </div>
    </div>
  );
};

export default Movie;
