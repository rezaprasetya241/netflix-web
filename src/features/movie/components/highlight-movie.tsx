import { useEffect } from "react";
import { type Movie } from "../types/movie.types";
import { truncate } from "../../../libs/utils";
import { useUpcomingMoviesQuery } from "../api/useUpcominMoviesQuery";

const HiglightMovie = () => {
  const { data } = useUpcomingMoviesQuery();

  const getRandomMovie = (): Movie => {
    if (data?.results) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      return data.results[randomIndex];
    }
    return {} as Movie;
  };

  useEffect(() => {
    getRandomMovie();
  }, [data]);
  return (
    <header
      className={`text-white relative object-contain h-[70vh] bg-cover`}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${
          getRandomMovie()?.backdrop_path
        }')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="p-4 ml-7 flex flex-col gap-4 justify-center h-full">
        <h1 className="font-extrabold text-white text-3xl">
          {getRandomMovie().title || getRandomMovie().original_title}
        </h1>
        <div className="flex items-center space-x-3">
          <button className="cursor-pointer text-white font-bold rounded-md px-5 py-2 bg-[#33333380]">
            Play
          </button>
          <button className="cursor-pointer text-white font-bold rounded-md px-5 py-2 bg-[#33333380]">
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(getRandomMovie()?.overview, 150)}
        </h1>
      </div>
    </header>
  );
};

export default HiglightMovie;
