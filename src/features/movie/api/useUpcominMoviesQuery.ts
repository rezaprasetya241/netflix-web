import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axios";

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["upcoming-movies"],
    queryFn: async () => {
      const res = await api.get("/movie/upcoming?language=en-US&page=1");
      return res.data;
    },
  });
};
