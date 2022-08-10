import React from "react";
import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAllMovies,
  fetchAllShows,
} from "../../features/movies/MovieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies("Harry"));
    dispatch(fetchAllShows("Harry"));
  }, [dispatch]);

  return (
    <div>
      <MovieListing></MovieListing>
    </div>
  );
};

export default Home;
