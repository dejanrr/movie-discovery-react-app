import "./App.css";

import { useContext } from "react";
import { MovieContext } from "./Context/MovieContext";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./pages/Popular/Popular";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import Favorites from "./pages/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
import TopRated from "./pages/TopRated/TopRated";
import Upcoming from "./pages/Upcoming/Upcoming";
import Search from "./pages/Search/Search.js";
import Actor from "./pages/Actor/Actor.js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="toprated" element={<TopRated />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="/find" element={<Search />} />
          <Route path="movieinfo" element={<MovieInfo />} />
          <Route path="actor" element={<Actor />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
