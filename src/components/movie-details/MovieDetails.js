import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrSerieById,
  getSelectedMovieOrSerie,
  removeSelectedMovieOrSerie,
} from "../../features/movies/moviesSlice";

function MovieDetails() {
  const { id } = useParams();
  /* Get data from the store */
  const data = useSelector(getSelectedMovieOrSerie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSerieById(id));

    return () => {
      dispatch(removeSelectedMovieOrSerie());
    };
  }, []);

  /* console.log(data); */

  return (
    <div className="p-10 h-screen">
      <div className="flex flex-col">
        <div>
          <img
            src={data.Poster}
            alt=""
            className="h-[400px] w-[400px] mx-auto"
          />
        </div>

        <div className="p-10 text-center text-black dark:text-white">
          <h2 className="pb-2 text-2xl font-bold">
            {data.Title} ({data.Writer})
          </h2>
          <p className="pb-2 text-md">
            ({data.Year}, {data.Country})
          </p>
          <p className="pb-2 text-md">{data.Actors}</p>

          <hr />
          <p className="pb-2 text-lg mt-4">{data.Plot}</p>
        </div>

        <Link
          to="/"
          className="bg-transparent text-black dark:text-white mx-auto rounded border border-black dark:border-white py-2 px-4"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;
