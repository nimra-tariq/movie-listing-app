import { createSlice } from "@reduxjs/toolkit";

const initialState = { movies: {} };
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
  },
});

export const { addMovies } = movieSlice.actions;
//get all movies arrow fun to be pass in useSelector same as useSelector(state=>state.movies.movies)
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
// export default movieSlice.reducer
