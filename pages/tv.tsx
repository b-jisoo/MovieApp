import { useEffect, useRef } from "react";
import useLocalStorage from "use-local-storage";
import useFetchMoviesData from "../components/hook/useFetchData";
import useIntersection from "../components/hook/useIntersection";
import { SplashScreen } from "../components/layout/splashScreen";
import Seo from "../components/Seo";
import TvList from "../components/tvShow";
import { QueryKey } from "../queryClient";

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
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return (
    <div className="container mx-auto px-4 pt-16">
      <Seo title="TV show" />
      {status === "loading" && <SplashScreen />}

      <h2 className="uppercase tracking-wider text-gray-500 text-lg font-semibold">
        Popular Shows
      </h2>
      <TvList list={data?.pages || []} />
      <div ref={fetchMoreRef} />
      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
};

export default TvPage;
