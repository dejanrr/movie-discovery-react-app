import React, { useContext } from "react";
import "../../assets/css/global.css";
import Movie from "../Movie/Movie.js";
import PersonCard from "../PersonCard/PersonCard";
import { MovieContext } from "../../Context/MovieContext";
import Flickity from "react-flickity-component";

import "./carousel.css";
import "./flickity.css";

const Carousel = ({ moviesArray }) => {
  const { onMovieSelect, selectedPerson, setSelectedPerson, popularMovies } =
    useContext(MovieContext);

  return (
    <div className="carousel-box">
      <Flickity>
        {moviesArray?.length ? (
          <>
            {moviesArray[1].title ? (
              <>
                {moviesArray?.length
                  ? moviesArray.map((movie) => (
                      <Movie
                        key={movie.id}
                        {...movie}
                        movie={movie}
                        onMovieSelect={onMovieSelect}
                      />
                    ))
                  : "No results found"}
              </>
            ) : (
              <>
                {moviesArray?.length
                  ? moviesArray.map((person) => (
                      <PersonCard
                        key={person.id}
                        {...person}
                        person={person}
                        setSelectedPerson={setSelectedPerson}
                      />
                    ))
                  : "No results found"}
              </>
            )}
          </>
        ) : (
          <>"No results found"</>
        )}
      </Flickity>
    </div>
  );
};

export default Carousel;
