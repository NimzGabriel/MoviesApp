import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/moviesSlice";
import MovieCard from "../movie-card/MovieCard";
import Slider from "react-slick";
import { carouselSettings } from "../../helpers/carousel-settings";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))
    ) : (
      <div>
        <h2>{movies.Error}</h2>
      </div>
    );

  const renderSeries =
    series.Response === "True" ? (
      series.Search.map((series, index) => (
        <MovieCard movie={series} key={index} />
      ))
    ) : (
      <div>
        <h2>{series.Error}</h2>
      </div>
    );

  return (
    <div className="p-10">
      {/* Movie container */}
      <div>
        <h2 className="font-bold text-center text-xl text-black dark:text-white mb-4">
          Movies
        </h2>

        <div>
          <Slider {...carouselSettings}>{renderMovies}</Slider>
        </div>
      </div>

      {/* Series container */}
      <div>
        <h2 className="font-bold text-center text-xl text-black dark:text-white mb-4">
          Series
        </h2>

        <div>
          <Slider {...carouselSettings}>{renderSeries}</Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
