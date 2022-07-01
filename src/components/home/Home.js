import React, { useEffect } from "react";
import MovieListing from "../movie-listing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/moviesSlice";

function Home() {
  const dispatch = useDispatch();

  const title = "naruto";

  useEffect(() => {
    dispatch(fetchAsyncMovies(title));
    dispatch(fetchAsyncSeries(title));
  }, [dispatch]);

  return <MovieListing />;
}

export default Home;
