import { useQuery } from "@tanstack/react-query";
import { QueryKey, restFetcher } from "../../../queryClient";
import { MovieDetails as get_movieDetails, video } from "../../../type";

export const useGetMoviesCredits = (id: number | undefined) => {
  const { data, isLoading } = useQuery([QueryKey.MOVIES_CREDIT, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/movies/${id}/credits`,
    })
  );
  return data;
};

export const useGetMoviesDeteli = (id: number | undefined) => {
  return useQuery<get_movieDetails>([QueryKey.MOVIES_DETAIL, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/movies/${id}`,
    })
  );
};
export const useGetMoviesVideo = (id: number | undefined) => {
  const { data } = useQuery([QueryKey.MOVIES_VIDEO, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/movies/${id}/videos`,
    })
  );
  return data;
};
