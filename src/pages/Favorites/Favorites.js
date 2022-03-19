import "./favorites.css";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Movie from "../../components/Movie/Movie";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  useEffect(() => {
    document.title = "Favorite Movies";
  }, []);

  return (
    <div>
      {/* {favorites.length > 0 ? (
        <div className="favorites-row">
          {favorites.map((movie) => (
            <div className="favorites-card">
              <Movie movie={movie} key={movie.id} />
              <img src={IMG_API + movie.poster_path} className="posterImg" />
              <div> {movie.title} </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="no-movies">No movies in your list! Add some!</h2>
      )} */}
    </div>
  );
};

export default Favorites;
