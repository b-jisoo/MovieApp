import { useQuery } from "@tanstack/react-query";
import { QueryKey, restFetcher } from "../../../queryClient";
import { atctorDetails } from "../../../type";

export const useGetActorCreditsData = (id: number | undefined) => {
  const { data } = useQuery([QueryKey.ACTOR_CAST, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/person/${id}/movie_credits`,
    })
  );
  return data;
};

export const useGetActorDeteliData = (id: number | undefined) => {
  return useQuery<atctorDetails>([QueryKey.ACTOR, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/person/${id}`,
    })
  );
};
