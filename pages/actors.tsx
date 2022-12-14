import { useEffect, useRef } from "react";
import useLocalStorage from "use-local-storage";
import ActorList from "../components/actor";
import useFetchMoviesData from "../components/hook/useFetchData";
import useIntersection from "../components/hook/useIntersection";
import { Skeleton } from "../components/layout/skeleton";
import Seo from "../components/Seo";
import { QueryKey } from "../queryClient";
import { DefaultSeo } from "next-seo";

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
    localStorage.setItem("movie_list_scroll", "0");
    localStorage.setItem("tv_list_scroll", "0");
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <DefaultSeo
        {...Seo({
          title: "Actors",
          description: "인기있는 배우를 쉽게 찾아볼 수 있는 MovieApp!",
        })}
      />
      {status === "loading" && <Skeleton />}

      <div className="popular-actors">
        <h2 className="uppercase tracking-wider text-gray-500 text-lg font-semibold">
          Popular Actors
        </h2>
      </div>
      <ActorList list={data?.pages || []} />
      <div ref={fetchMoreRef} />
      {isFetchingNextPage && <Skeleton />}
    </div>
  );
};

export default ActorsPage;
