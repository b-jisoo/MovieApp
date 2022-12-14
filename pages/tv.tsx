import { useEffect, useRef } from "react";
import useLocalStorage from "use-local-storage";
import useFetchMoviesData from "../components/hook/useFetchData";
import useIntersection from "../components/hook/useIntersection";
import { LoadingAnimation } from "../components/layout/loadingAnimation";
import { Skeleton } from "../components/layout/skeleton";
import Seo from "../components/Seo";
import TvList from "../components/tvShow";
import { QueryKey } from "../queryClient";
import { DefaultSeo } from "next-seo";

const TVSHOWS = "tv";

export const TvPage = () => {
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(fetchMoreRef);
  const [scrollY] = useLocalStorage("tv_list_scroll", 0);

  const {
    data,
    status,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useFetchMoviesData(QueryKey.TV_DETAIL, TVSHOWS);

  useEffect(() => {
    if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage)
      return;
    fetchNextPage();
  }, [intersecting]);

  useEffect(() => {
    localStorage.setItem("movie_list_scroll", "0");
    localStorage.setItem("actor_list_scroll", "0");
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return (
    <div className="container mx-auto px-4 pt-16">
      <DefaultSeo
        {...Seo({
          title: "TV show",
          description: "인기있는 티비 프로그램을 쉽게 찾아볼 수 있는 MovieApp!",
        })}
      />
      {status === "loading" && <Skeleton />}

      <h2 className="uppercase tracking-wider text-gray-500 text-lg font-semibold">
        Popular Shows
      </h2>
      <TvList list={data?.pages || []} />
      <div ref={fetchMoreRef} />
      {isFetchingNextPage && <Skeleton />}
    </div>
  );
};

export default TvPage;
