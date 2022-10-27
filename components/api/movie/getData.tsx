import { useQuery } from "@tanstack/react-query";
import { QueryKey, restFetcher } from "../../../queryClient";
import { MovieDetails, video } from "../../../type";

export const useGetMoviesCreditsData = (id: number | undefined) => {
  const { data, isLoading } = useQuery([QueryKey.MOVIESCAST, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/movies/${id}/credits`,
    })
  );
  return data;
};

export const useGetMoviesDeteliData = (id: number | undefined) => {
  return useQuery<MovieDetails>([QueryKey.MOVIES, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/movies/${id}`,
    })
  );
};
export const useGetMoviesVideoData = (id: number | undefined) => {
  return useQuery([QueryKey.MOVIES_VIDEO, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/movies/${id}/videos`,
    })
  );
};
