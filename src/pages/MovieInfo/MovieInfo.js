import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import "./movieInfo.css";
import { Link } from "react-router-dom";
import "../../assets/css/global.css";
import blank from "../../assets/blankProfile.png";
import Movie from "../../components/Movie/Movie.js";
import Carousel from "../../components/Carousel/Carousel.js";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieInfo = () => {
  const {
    selectedMovie,
    onMovieSelect,
    movieInfo,
    actors,
    crew,
    fullCastOpen,
    setFullCastOpen,
    fullCrewOpen,
    setFullCrewOpen,
    handleFullCastList,
    handleFullCrewList,
    setSelectedPerson,
    similarMovies,
    movieVideos,
    movieReviews,
  } = useContext(MovieContext);

  useEffect(() => {
    document.title = ` ${movieInfo?.title} (${
      movieInfo?.release_date /* .slice(
      0,
      4
    ) */
    })`;
  }, [movieInfo?.title, movieInfo?.release_date]);

  return (
    <>
      {movieInfo?.title?.length ? (
        <div className="movie-info-container">
          <div className="movie-page-header">
            <div className="movie-info-wrapper">
              <div className="movie-info-left-box">
                <img
                  src={IMG_API + movieInfo?.poster_path}
                  className="movie-info-poster"
                />
                <div className="movie-info-columns">
                  <span>
                    <p className="movie-title">{movieInfo?.title}</p>
                    <p className="movie-release-date">
                      {movieInfo?.release_date} | Rating:{" "}
                      {movieInfo?.vote_average} |
                      <a
                        href={`https://www.imdb.com/title/${movieInfo?.imdb_id}/`}
                      >
                        IMDB
                      </a>
                    </p>
                  </span>
                  <span>
                    <h1>Synopsis</h1>
                    <span>{movieInfo?.overview}</span>
                  </span>
                  <span>
                    <h1>Production</h1>
                    <span>
                      {movieInfo?.production_companies?.length
                        ? movieInfo?.production_companies.map((companyName) => (
                            <span>{companyName.name}, </span>
                          ))
                        : "No results found"}
                    </span>
                  </span>
                </div>
              </div>
              <div className="movie-info-right-box">
                <div className="movie-info-columns">
                  <span>
                    <h1>Runtime</h1>
                    {movieInfo?.runtime} minutes
                  </span>
                  <span>
                    <h1>Status</h1>
                    <span>{movieInfo?.status}</span>
                  </span>
                  <span>
                    <h1>Language</h1>
                    <span>
                      {movieInfo?.spoken_languages?.length
                        ? movieInfo?.spoken_languages.map((lang) => (
                            <span>{lang.name}, </span>
                          ))
                        : "No results found"}
                    </span>
                  </span>
                  <span>
                    <h1>Genres</h1>
                    <span>
                      {movieInfo?.genres?.length
                        ? movieInfo?.genres.map((genre) => (
                            <span>{genre.name}, </span>
                          ))
                        : "No results found"}
                    </span>
                  </span>
                  <span>
                    <h1>Country</h1>
                    <span>
                      {movieInfo?.production_countries?.length
                        ? movieInfo?.production_countries.map((country) => (
                            <span>{country.name}, </span>
                          ))
                        : "No results found"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cast-section">
            <div className="carousel-container">
              <div className="carousel-container-header">
                <div>Similar Movies</div>
              </div>
              <div className="carousel-box">
                <Carousel moviesArray={similarMovies} />
              </div>
            </div>

            <div className="carousel-container">
              <div className="carousel-container-header">
                <div>Top cast</div>
              </div>
              <div className="carousel-box">
                <Carousel moviesArray={actors} />
              </div>
            </div>

            <div className="full-credits-container">
              <div className="full-credits-wrapper">
                <div className="full-credits-header">
                  <div>Full cast list</div>
                  <div className="show" onClick={handleFullCastList}>
                    Show
                  </div>
                </div>
                {actors?.length
                  ? actors.map((actor) => (
                      <div className="full-credits-list">
                        {fullCastOpen === true ? (
                          <div className="full-credits-item">
                            <div className="person-name-column">
                              <div className="person-image-container">
                                {actor.profile_path != null ? (
                                  <Link to="/actor">
                                    <img
                                      src={IMG_API + actor.profile_path}
                                      width="80px"
                                      onClick={() =>
                                        setSelectedPerson(actor.id)
                                      }
                                      className="person-img"
                                    />
                                  </Link>
                                ) : (
                                  <img
                                    src={blank}
                                    width="80px"
                                    className="person-img"
                                  />
                                )}
                              </div>
                              <div className="person-name-text">
                                {actor.name}
                              </div>
                            </div>
                            <div className="person-role-column">
                              <div className="person-role">
                                {actor.character}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))
                  : "No data"}
              </div>
            </div>

            <div className="full-credits-container">
              <div className="full-credits-array">
                <div className="full-credits-header">
                  <div>Full crew list</div>
                  <div className="show" onClick={handleFullCrewList}>
                    Show
                  </div>
                </div>
                {crew?.length
                  ? crew.map((member) => (
                      <div className="full-credits-list">
                        {fullCrewOpen === true ? (
                          <div className="full-credits-item">
                            <div className="person-name-column">
                              <div className="person-image-container">
                                {member.profile_path != null ? (
                                  <img
                                    src={IMG_API + member.profile_path}
                                    width="80px"
                                  />
                                ) : (
                                  <img src={blank} width="80px" />
                                )}
                              </div>
                              <div className="person-name-text">
                                {member.name}
                              </div>
                            </div>
                            <div className="person-role-column">
                              <div className="person-role">{member.job}</div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))
                  : "No data"}
              </div>
            </div>

            <div className="movie-videos-section">
              <div className="movie-videos-container">
                {movieVideos?.length
                  ? movieVideos.map((video) => (
                      <div className="movie-video-box">
                        <iframe
                          width="580"
                          height="350"
                          src={`https://www.youtube.com/embed/${video.key}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                      </div>
                    ))
                  : "No results found"}
              </div>
            </div>

            <div className="movie-reviews-section">
              <div className="movie-reviews-container">
                <div className="full-credits-header">Recent Reviews</div>
                {movieReviews?.length
                  ? movieReviews.map((review) => (
                      <div className="movie-reviews-box">
                        <div className="movie-reviws-box-header">
                          <p>
                            Review by{" "}
                            <a href={`${review.url}`}>{review.author}</a> |
                            Rating {review.author_details.rating}
                          </p>
                          <p>Posted on {review.created_at}</p>
                        </div>
                        <div>{review.content}</div>
                      </div>
                    ))
                  : "No results found"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="movie-container">
          <div className="movie-page-header">
            <div className="movie-info-wrapper">no data found</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieInfo;
