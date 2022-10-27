import { useQuery } from "@tanstack/react-query";
import { QueryKey, restFetcher } from "../../../queryClient";
import { atctorDetails } from "../../../type";

export const useGetActorCredits = (id: number | undefined) => {
  const { data } = useQuery([QueryKey.ACTOR_CREDIT, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/person/${id}/movie_credits`,
    })
  );
  return data;
};

export const useGetActorDeteli = (id: number | undefined) => {
  return useQuery<atctorDetails>([QueryKey.ACTOR_DETAIL, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/person/${id}`,
    })
  );
};
