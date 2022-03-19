import axios from "axios";

const API_BASE = "https://api.themoviedb.org/3/";

export default {
  getActors: (selectedMovie) => {
    const url = `${API_BASE}movie/${selectedMovie}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
    return axios.get(url).then((info) => info.data);
  },
  getMovieInfo: (selectedMovie) => {
    const url = `${API_BASE}movie/${selectedMovie}?api_key=${process.env.REACT_APP_API_KEY}`;
    return axios.get(url).then((info) => info.data);
  },
  getPopularMovies: (popularMoviesPage) => {
    const url = `${API_BASE}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&page=${popularMoviesPage}`;
    return axios.get(url).then((info) => info.data);
  },
  getTopRatedMovies: (topRatedMoviesPage) => {
    const url = `${API_BASE}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${topRatedMoviesPage}`;
    return axios.get(url).then((info) => info.data);
  },
  getUpcomingMovies: (upcomingMoviesPage) => {
    const url = `${API_BASE}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${upcomingMoviesPage}`;
    return axios.get(url).then((info) => info.data);
  },
  getNowPlayingMovies: () => {
    const url = `${API_BASE}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=2`;
    return axios.get(url).then((info) => info.data);
  },
  getPersonDetails: (selectedPerson) => {
    const url = `${API_BASE}person/${selectedPerson}?api_key=${process.env.REACT_APP_API_KEY}`;
    return axios.get(url).then((info) => info.data);
  },
  getMovieCredits: (selectedPerson) => {
    const url = `${API_BASE}person/${selectedPerson}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`;
    return axios.get(url).then((info) => info.data);
  },
  getSimilarMovies: (selectedMovie) => {
    const url = `${API_BASE}movie/${selectedMovie}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=1`;
    return axios.get(url).then((info) => info.data);
  },
  getMovieVideos: (selectedMovie) => {
    const url = `${API_BASE}movie/${selectedMovie}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
    return axios.get(url).then((info) => info.data);
  },
  getMovieReviews: (selectedMovie) => {
    const url = `${API_BASE}movie/${selectedMovie}/reviews?api_key=${process.env.REACT_APP_API_KEY}&page=1`;
    return axios.get(url).then((info) => info.data);
  },
  getSearchData: (searchQuery) => {
    const url = `${API_BASE}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;
    return axios.get(url + searchQuery).then((info) => info.data);
  },
};
