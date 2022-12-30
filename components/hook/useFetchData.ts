import { useInfiniteQuery } from "@tanstack/react-query";
import { restFetcher } from "../../queryClient";

export const useFetchMoviesData = (QueryKey: string, data: string) => {
  return useInfiniteQuery(
    [`${QueryKey}`],
    ({ pageParam = 1 }) =>
      restFetcher({
        method: "GET",
        path: `/api/${data}/`,
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
