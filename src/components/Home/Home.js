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
    // const fetchMovies = async () => {
    //   try {
    //     const response = await MovieApi.get(
    //       `?apiKey=${MovieApiKey}&type=movie&s=${movieText}`
    //     );
    //     //dispatch movies to store
    //     dispatch(addMovies(response.data));
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error, "error occured");
    //   }
    // };
    // fetchMovies();
    //fetched async data using thunk and dipatch to store
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
