import { useEffect, useState } from "react";
import type { Movie } from "../types/movie.types";
import CardMovie from "./card-movie";
import api from "../../../api/axios";
import SkeletonCardMovie from "./skeleton-movie";

interface Props {
  title: string;
  idGenre: number;
}

const SectionMovie = ({ title, idGenre }: Props) => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `/discover/movie?with_genres=${idGenre}`
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [idGenre]);
  return (
    <section className="flex flex-col text-start">
      <h2 className="font-bold text-lg text-white">{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 pl-0 scrollbar-none gap-x-2">
        {loading &&
          Array.from({ length: 10 }, (_, index) => index).map((_, index) => {
            return <SkeletonCardMovie key={index} />;
          })}
        {!loading &&
          data.map((movie) => (
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

export default SectionMovie;
