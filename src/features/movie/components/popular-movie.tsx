import { usePopularMoviesQuery } from "../api/usePopularMoviesQuery";
import type { Movie } from "../types/movie.types";
import CardMovie from "./card-movie";
import SkeletonCardMovie from "./skeleton-movie";

const PopularMovies = () => {
  const { data, isLoading } = usePopularMoviesQuery();
  return (
    <section className="flex flex-col text-start my-5 px-5">
      <h2 className="font-bold text-3xl text-white">Top Popular Movies</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 pl-0 scrollbar-none gap-x-2">
        {isLoading &&
          Array.from({ length: 10 }, (_, index) => index).map((_, index) => {
            return <SkeletonCardMovie key={index} />;
          })}
        {!isLoading &&
          data.results?.map((movie: Movie) => (
            <CardMovie
              key={movie.id}
              src={movie.poster_path}
              alt={movie.title}
            />
          ))}
      </div>
    </section>
  );
};

export default PopularMovies;
