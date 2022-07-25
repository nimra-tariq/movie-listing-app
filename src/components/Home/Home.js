import React from "react";
import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { MovieApiKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/MovieSlice";

const Home = () => {
    
  const movieText = "harry";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await MovieApi.get(
          `?apiKey=${MovieApiKey}&type=movie&s=${movieText}`
        );
        //dispatch movies to store
        dispatch(addMovies(response.data));
        console.log(response);
      } catch (error) {
        console.log(error, "error occured");
      }
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      Home
      <MovieListing></MovieListing>
    </div>
  );
};

export default Home;
