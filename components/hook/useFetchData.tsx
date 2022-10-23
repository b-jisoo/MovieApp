import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryKey, restFetcher } from "../../queryClient";
import { GetMovies } from "../../type";

export const useFetchMoviesData = () => {
  return useInfiniteQuery<GetMovies>(
    [QueryKey.MOVIES], // 매개변수로
    ({ pageParam = "" }) =>
      restFetcher({
        method: "GET",
        path: "/api/movies", // 매개변수로
        params: {
          page: pageParam,
        },
      }),
    {
      getNextPageParam: (lastPage) => {
        const { page, total_pages: totalPages } = lastPage;
        return page < totalPages ? page + 1 : undefined;
      },
    }
  );
};

export default useFetchMoviesData;
