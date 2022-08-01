import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { MovieApiKey } from "../../common/apis/MovieApiKey";

const initialState = { movies: {}, shows: {}, movieOrShowDetail: {} };

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async (search) => {
    try {
      const response = await MovieApi.get(
        `?apiKey=${MovieApiKey}&type=movie&s=${search}`
      );
      return response.data;
    } catch (error) {
      console.log(error, "movies error");
    }
  }
);

export const fetchAllShows = createAsyncThunk(
  "movies/fetchAllShows",
  async (search) => {
    try {
      const response = await MovieApi.get(
        `?apiKey=${MovieApiKey}&type=series&s=${search}`
      );
      return response.data;
    } catch (error) {
      console.log(error, "shows error");
    }
  }
);

export const fetchMovieorShowDetail = createAsyncThunk(
  "movies/fetchMovieorShowDetail",
  async (id) => {
    try {
      const response = await MovieApi.get(
        `?apiKey=${MovieApiKey}&i=${id}&plot=full`
      );
      return response.data;
    } catch (error) {
      console.log(error, "fetch detail error");
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      //sec param will have a obj {type:"",payload:""}
      //destruct payload
      state.movies = payload;
      //   state.movies = action.payload;
    },
    removeSelectedMovieOrShowDetail: (state) => {
      console.log("remove detail");
      state.movieOrShowDetail = {};
    },
  },
  extraReducers: {
    [fetchAllMovies.pending]: () => {
      console.log("promise pending");
    },
    //returned obj form promise will have some extra properties destructure payload
    [fetchAllMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
    },
    [fetchAllShows.fulfilled]: (state, { payload }) => {
      state.shows = payload;
    },
    [fetchMovieorShowDetail.fulfilled]: (state, { payload }) => {
      // console.log("detail fulfilled");
      // console.log(payload);
      state.movieOrShowDetail = payload;
    },
  },
});

export const { addMovies, removeSelectedMovieOrShowDetail } =
  movieSlice.actions;
//get all movies arrow fun to be pass in useSelector same as useSelector(state=>state.movies.movies)
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.movieOrShowDetail;
export default movieSlice.reducer;
// export default movieSlice.reducer
