import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { Title, Year, Poster, imdbID: id } = movie;

  return (
    /* Card */
    <div className="bg-white shadow-lg dark:shadow-none dark:bg-[#232d3a] text-black dark:text-white rounded-lg mx-2 hover:scale-105 duration-200 mt-5">
      <Link to={`movie/${id}`}>
        {/* Inner card */}
        <div className="p-2">
          {/* Card Top */}
          <div className="h-[300px]">
            <img src={Poster} className="w-full h-full rounded-t-lg" alt="" />
          </div>

          {/* Card Bottom */}
          <div className="py-2">
            {/* Card Info */}
            <h2 className="text-lg text-center">{Title}</h2>
            <p className="text-center">({Year})</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
