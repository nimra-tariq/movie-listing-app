import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"

const MovieListing = () => {
  //useSelector gives state
  const movies = useSelector(getAllMovies);
  // console.log(movies, "useSelector");
  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            {movies.Response === "True" ? (
              movies?.Search?.map((movie, id) => (
                <MovieCard key={id} data={movie} />
              ))
            ) : (
              <div className="movies-error">
                <h3>{movies.Error}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;
