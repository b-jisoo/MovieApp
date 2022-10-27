import { useEffect, useRef } from "react";
import useLocalStorage from "use-local-storage";
import ActorList from "../components/actor";
import useFetchMoviesData from "../components/hook/useFetchData";
import useIntersection from "../components/hook/useIntersection";
import { SplashScreen } from "../components/layout/splashScreen";
import Seo from "../components/Seo";
import { QueryKey } from "../queryClient";

const ACTOR_URL = "person";

export const ActorsPage = () => {
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(fetchMoreRef);
  const [scrollY] = useLocalStorage("actor_list_scroll", 0);

  const {
    data,
    status,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useFetchMoviesData(QueryKey.ACTOR_DETAIL, ACTOR_URL);

  useEffect(() => {
    if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage)
      return;
    fetchNextPage();
  }, [intersecting]);

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);
  console.log("사람data", data);

  return (
    <div className="container mx-auto px-4 py-16">
      <Seo title="Actors" />
      {status === "loading" && <SplashScreen />}

      <div className="popular-actors">
        <h2 className="uppercase tracking-wider text-gray-500 text-lg font-semibold">
          Popular Actors
        </h2>
      </div>
      <ActorList list={data?.pages || []} />
      <div ref={fetchMoreRef} />
      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
};

export default ActorsPage;
