import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { MovieContext } from "../../Context/MovieContext";

const Navbar = () => {
  const {
    searchVisible,
    setSearchVisible,
    searchQuery,
    setSearchQuery,
    handleSubmit,
  } = useContext(MovieContext);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Movie Discovery</div>
        <div>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/toprated">Top Rated</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming</Link>
            </li>
          </ul>
        </div>

        {searchVisible === true ? (
          <div
            onClick={() => setSearchVisible(!searchVisible)}
            style={!searchVisible ? { display: "none" } : { searchVisible }}
          >
            Search
          </div>
        ) : (
          <div className="search-box">
            <form onSubmit={handleSubmit}>
              <input
                value={searchQuery}
                className="search"
                type="search"
                placeholder="Search..."
                onChange={handleChange}
                style={searchVisible ? { display: "none" } : { searchVisible }}
              />
            </form>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
