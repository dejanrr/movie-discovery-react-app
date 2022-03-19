import Movie from "../../components/Movie/Movie";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import blankProfile from "../../assets/blankProfile.png";

import "./home.css";
import Carousel from "../../components/Carousel/Carousel.js";

const Home = () => {
  const {
    selectedMovie,
    nextPage,
    prevPage,
    page,
    setPage,
    actors,
    actorImg,
    popularMovies,
    onMovieSelect,
    topRatedMovies,
    upcomingMovies,
    setUpcomingMovies,
    nowPlayingMovies,
    setNowPlayingMovies,
  } = useContext(MovieContext);

  useEffect(() => {
    document.title = "Movie Discovery";
  }, []);

  /*  const homepagePopularArray = popularMovies.slice(0, 5);
  const homepageTopRatedArray = topRatedMovies.slice(0, 3);
  const homepageTopRatedChart = topRatedMovies.slice(4, 11);
  const nowPlayingMoviesArray = nowPlayingMovies.slice(0, 10); */

  const textArray = [
    { name: "text" },
    { name: "text" },
    { name: "text" },
    { name: "text" },
    { name: "text" },
    { name: "text" },
    { name: "text" },
    { name: "text" },
    { name: "text" },
  ];

  return (
    <div className="homepage">
      <header>
        <div className="header-text">
          <h1>Discover new movies</h1>
          <p>Rate films you've watched.</p>
          <p>Save those you want to see.</p>
          <p>Mark movies you like as favorites.</p>
          <div className="header-btn">
            <button>Try it out</button>
          </div>
          <p>
            Movie Discovery is a free web application for movie recommendations
          </p>
        </div>
      </header>
      <div className="steps-section">Text placeholder</div>
      <div className="homepage-rows-section">
        <div className="top-picks-section-headings">
          <div className="heading">See your stats</div>
          <div className="subheading">
            We'll analyze all of the movies and TV shows you've seen and
            generate your stats
          </div>
        </div>
        <div className="popular-movies-row">
          <div className="popular-movies-row-header">
            <div className="movies-row-header-title">Top picks</div>
            <div className="header-view-all">View all</div>
          </div>
          <Carousel moviesArray={popularMovies} />
        </div>
        <div className="top-rated-movies-section">
          <div className="actors-chart-box">
            <div className="popular-movies-row-header">
              <div className="movies-row-header-title">Top picks</div>
              <div className="header-view-all">View all</div>
            </div>
            {/* {homepageTopRatedChart?.length
              ? homepageTopRatedChart.map((movie, index) => (
                  <ul className="movies-chart-list-item">
                    <li>
                      {index + 4}.{movie.title}
                    </li>
                  </ul>
                ))
              : "No results found"} */}
            {/* {textArray.map((item) => (
              <ul>
                <li>{item.name}</li>
              </ul>
            ))} */}
            {textArray.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
          <div className="actors-row">
            <div className="popular-movies-row-header">
              <div className="movies-row-header-title">Top picks</div>
              <div className="header-view-all">View all</div>
            </div>
            <div className="homepage-movies-array">
              <Carousel moviesArray={topRatedMovies} />
            </div>
          </div>
        </div>

        <div className="top-rated-movies-section">
          <div className="chart-box">
            <div className="popular-movies-row-header">
              <div className="movies-row-header-title">Top picks</div>
              <div className="header-view-all">View all</div>
            </div>
            {textArray.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
          <div className="movie-box">
            <div className="popular-movies-row-header">
              <div className="movies-row-header-title">Top picks</div>
              <div className="header-view-all">View all</div>
            </div>
            <div className="homepage-movies-array">
              <Carousel moviesArray={topRatedMovies} />
            </div>
          </div>
        </div>

        <div className="now-playing-movies-section">
          <p className="section-heading">Now Playing Movies</p>
          <div className="now-playing-movies-container">
            {nowPlayingMovies?.length
              ? nowPlayingMovies.map((movie) => (
                  <Movie
                    key={movie.id}
                    {...movie}
                    onMovieSelect={onMovieSelect}
                  />
                ))
              : "No results found"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
