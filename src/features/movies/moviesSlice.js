import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "53c800d";

/* Fetch Async Movies */
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (title) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=movie`
    );
    return data;
  }
);

/* Fetch Async Series */
export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (title) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=series`
    );
    return data;
  }
);

/* Fetch Async By Id */
export const fetchAsyncMovieOrSerieById = createAsyncThunk(
  "movies/fetchAsyncMovieOrSerieById",
  async (id) => {
    const apiKey = "53c800d";
    const plot = "full";

    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=${plot}`
    );
    return data;
  }
);

const initialState = {
  movies: {},
  series: {},
  movieOrSerieById: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    /*     addMovies: (state, action) => {
      state.movies = action.payload;
    }, */
    removeSelectedMovieOrSerie: (state) => {
      state.movieOrSerieById = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending...");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Fulfilled!");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, action) => {
      return { ...state, series: action.payload };
    },
    [fetchAsyncMovieOrSerieById.fulfilled]: (state, action) => {
      return { ...state, movieOrSerieById: action.payload };
    },
  },
});

/* export const { addMovies } = moviesSlice.actions; */
export const { removeSelectedMovieOrSerie } = moviesSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovieOrSerie = (state) => state.movies.movieOrSerieById;

export default moviesSlice.reducer;
