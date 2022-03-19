import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import "./actor.css";
import blank from "../../assets/blankProfile.png";
import Carousel from "../../components/Carousel/Carousel.js";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Actor = () => {
  const { personInfo, movieCredits, onMovieSelect, popularMovies } =
    useContext(MovieContext);

  document.title = `${personInfo?.name}`;

  return (
    <div className="person-page-container">
      <div className="person-info-section">
        <div className="person-info-wrapper">
          <div className="imgimg">
            <div className="person-image-container">
              <img
                src={IMG_API + personInfo?.profile_path}
                className="person-image"
              />
            </div>
          </div>
          <div className="person-info-container">
            <span>
              <p className="person-name">{personInfo?.name}</p>
            </span>
            <span>
              <span>{personInfo?.known_for_department}</span> |
              <a href={`https://www.imdb.com/title/${personInfo?.imdb_id}/`}>
                IMDB
              </a>
            </span>
            <span>
              <h1>Also Known As</h1>
              <span>
                {personInfo?.also_known_as?.length
                  ? personInfo?.also_known_as.map((aka) => <span>{aka}, </span>)
                  : ""}
              </span>
            </span>
            <span>
              <h1>Birthday</h1>
              <span>{personInfo?.birthday}</span>
            </span>
            {personInfo?.deathday !== null ? (
              <span>
                <h1>Died</h1>
                <span>{personInfo?.deathday}</span>
              </span>
            ) : (
              ""
            )}
            <span>
              <h1>Place of Birth</h1>
              <span>{personInfo?.place_of_birth}</span>
            </span>
            <span>
              <h1>Gender</h1>
              {personInfo?.gender === 1 ? (
                <span>Female</span>
              ) : (
                <span>Male</span>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="person-biography-section">
        <div className="person-biography">
          <div>
            <h1>Biography</h1>
          </div>
          <div className="person-biography-text">{personInfo?.biography}</div>
        </div>
      </div>
      <div className="known-for-section">
        <div className="carousel-container">
          <div className="carousel-container-header">
            <div>Known For</div>
          </div>
          <div className="carousel-box">
            <Carousel moviesArray={movieCredits} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actor;
