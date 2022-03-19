import { useState, useEffect, createContext } from "react";
import Api from "../services/movieService.js";
import { Link, useNavigate } from "react-router-dom";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
  const [movies, setMovies] = useState();
  const [selectedMovie, onMovieSelect] = useState();
  const [selectedPerson, setSelectedPerson] = useState();
  const [movieInfo, setMovieInfo] = useState();
  const [personInfo, setPersonInfo] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [actors, setActors] = useState();
  const [crew, setCrew] = useState();
  const [movieReviews, setMovieReviews] = useState();

  const [page, setPage] = useState(1);

  const [popularMoviesPage, setPopularMoviesPage] = useState(1);
  const [topRatedMoviesPage, setTopRatedMoviesPage] = useState(1);
  const [upcomingMoviesPage, setUpcomingMoviesPage] = useState(1);

  const [movieCredits, setMovieCredits] = useState();
  const [similarMovies, setSimilarMovies] = useState();

  const [favorites, setFavorites] = useState([]);

  const [fullCastOpen, setFullCastOpen] = useState(false);
  const [fullCrewOpen, setFullCrewOpen] = useState(false);

  useEffect(() => {
    Api.getActors(selectedMovie).then((data) => {
      setActors(data.cast);
      setCrew(data.crew);
      console.log(data.cast);
    });
  }, [selectedMovie]);

  useEffect(() => {
    Api.getMovieInfo(selectedMovie).then((data) => {
      setMovieInfo(data);
    });
  }, [selectedMovie]);

  useEffect(() => {
    Api.getPopularMovies(popularMoviesPage).then((data) => {
      setPopularMovies(data.results);
    });
  }, [popularMoviesPage]);

  useEffect(() => {
    Api.getTopRatedMovies(topRatedMoviesPage).then((data) => {
      setTopRatedMovies(data.results);
    });
  }, [topRatedMoviesPage]);

  useEffect(() => {
    Api.getUpcomingMovies(upcomingMoviesPage).then((data) => {
      setUpcomingMovies(data.results);
    });
  }, [upcomingMoviesPage]);

  useEffect(() => {
    Api.getNowPlayingMovies().then((data) => {
      setNowPlayingMovies(data.results);
    });
  }, []);

  useEffect(() => {
    Api.getPersonDetails(selectedPerson).then((data) => {
      setPersonInfo(data);
    });
  }, [selectedPerson]);

  useEffect(() => {
    Api.getMovieCredits(selectedPerson).then((data) => {
      setMovieCredits(data.cast);
      console.log("this is movie credits" + data);
    });
  }, [selectedPerson]);

  useEffect(() => {
    Api.getSimilarMovies(selectedMovie).then((data) => {
      setSimilarMovies(data.results);
    });
  }, [selectedMovie]);

  useEffect(() => {
    Api.getMovieVideos(selectedMovie).then((data) => {
      setMovieVideos(data.results);
    });
  }, [selectedMovie]);

  useEffect(() => {
    Api.getMovieReviews(selectedMovie).then((data) => {
      setMovieReviews(data.results);
      console.log(data.results);
    });
  }, [selectedMovie]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    console.log(favorites);
  };

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      Api.getSearchData(searchQuery).then((data) => {
        setMovies(data.results);
        console.log(data);
      });
      setSearchQuery("");
    }

    const navigateToSearch = () => navigate("/find");
    navigateToSearch();
  };

  const handleFullCastList = () => {
    setFullCastOpen((prevFullCastOpen) => !prevFullCastOpen);
  };

  const handleFullCrewList = () => {
    setFullCrewOpen((prevFullCrewOpen) => !prevFullCrewOpen);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        selectedMovie,
        onMovieSelect,
        selectedPerson,
        setSelectedPerson,
        movieInfo,
        setMovieInfo,
        personInfo,
        setPersonInfo,

        similarMovies,
        setSimilarMovies,

        page,
        setPage,
        nextPage,
        prevPage,

        popularMovies,
        setPopularMovies,
        topRatedMovies,
        setTopRatedMovies,
        upcomingMovies,
        setUpcomingMovies,
        nowPlayingMovies,
        setNowPlayingMovies,

        actors,
        crew,
        IMG_API,

        favorites,
        setFavorites,

        handleFavoriteMovie,

        searchQuery,
        setSearchQuery,
        searchVisible,
        setSearchVisible,
        handleSubmit,

        fullCastOpen,
        setFullCastOpen,
        fullCrewOpen,
        setFullCrewOpen,

        handleFullCastList,
        handleFullCrewList,

        popularMoviesPage,
        setPopularMoviesPage,
        topRatedMoviesPage,
        setTopRatedMoviesPage,
        upcomingMoviesPage,
        setUpcomingMoviesPage,

        movieCredits,
        setMovieCredits,

        movieVideos,
        setMovieVideos,

        movieReviews,
        setMovieReviews,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
