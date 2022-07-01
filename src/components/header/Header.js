import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/moviesSlice";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (search === "") {
      alert("Please, enter a valid search");
    } else {
      dispatch(fetchAsyncMovies(search));
      dispatch(fetchAsyncSeries(search));
    }
    setSearch("");
  };

  const toggleMode = () => {
    const root = document.getElementById("root");
    root.classList.toggle("dark");
  };

  return (
    <header className="bg-white dark:bg-[#232d3a] h-16 w-full border-b dark:border-none">
      <nav className="h-full flex justify-between items-center w-[90%] mx-auto">
        <div>
          <Link to="/">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              MoviesApp
            </h2>
          </Link>
        </div>

        <div className="flex items-center">
          {/* Light / Dark Mode */}
          <div>
            <button
              class="border border-black dark:border-[whitesmoke] text-black dark:text-white bg-transparent py-2 px-4 rounded"
              onClick={toggleMode}
            >
              Light / Dark
            </button>
          </div>

          <div className="ml-6 py-2 px-4 bg-[whitesmoke] border border-gray-500 dark:border-none dark:bg-white rounded-3xl">
            <form onSubmit={handleSearchSubmit}>
              <input
                className="text-black outline-none border-none bg-[whitesmoke] dark:bg-white"
                type="text"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <i class="fa-solid fa-magnifying-glass text-[gray]"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
