import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";

import "./personCard.css";

/* import "./person.css"; */

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const PersonCard = ({
  profile_path,
  person,
  id,
  name,
  role,
  selectedPerson,
}) => {
  const {
    onMovieSelect,
    favorites,
    setFavorites,
    handleFavoriteMovie,
    setSelectedPerson,
  } = useContext(MovieContext);

  const handleClick = () => {
    selectedPerson(id);
  };

  return (
    <div onClick={handleClick} className="person">
      <Link to="/actor">
        <img
          src={IMG_API + person.profile_path}
          onClick={() => setSelectedPerson(person.id)}
        />
      </Link>
      <div className="person-info-card">
        <span>{name}</span>
        <span>{role}</span>
      </div>
    </div>
  );
};

export default PersonCard;
