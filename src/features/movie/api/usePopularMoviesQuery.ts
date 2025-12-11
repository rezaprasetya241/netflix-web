import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axios";

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: async () => {
      const res = await api.get("/movie/popular?language=en-US&page=1");
      return res.data;
    },
  });
};
