import { useQuery } from "@tanstack/react-query";
import { QueryKey, restFetcher } from "../../../queryClient";
import { get_video, get_TvDetails } from "../../../type";

export const useGetTvCredits = (id: number | undefined) => {
  const { data, isLoading } = useQuery([QueryKey.TV_DETAIL, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/tv/${id}/credits/`,
    })
  );
  return data;
};

export const useGetTvDeteli = (id: number | undefined) => {
  return useQuery<get_TvDetails>([QueryKey.TV_CREDIT, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/tv/${id}/`,
    })
  );
};
export const useGetTvVideo = (id: number | undefined) => {
  const { data } = useQuery<get_video>([QueryKey.TV_VIDEO, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/tv/${id}/videos/`,
    })
  );
  return data;
};
