import Seo from "../components/Seo";
import MovieList from "../components/movie/list";
import { useCallback, useEffect, useRef, useState } from "react";
import useIntersection from "../components/hook/useIntersection";
import useFetchMoviesData from "../components/hook/useFetchData";

export const Home = () => {
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(fetchMoreRef);

  const {
    data,
    status,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useFetchMoviesData();

  useEffect(() => {
    if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage)
      return;
    fetchNextPage();
  }, [intersecting]);

  return (
    <div className="container mx-auto px-4 pt-16">
      <Seo title="Home" />
      {status === "loading" && <p>불러오는 중</p>}
      <h2 className="uppercase tracking-wider text-gray-500 text-lg font-semibold">
        Popular Movies
      </h2>
      <MovieList list={data?.pages || []} />
      <div ref={fetchMoreRef} />
      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
};

export default Home;

// const getMovies = async (): Promise<Movie[]> => {
//   const data = await fetch(`/api/movies`);
//   const { results } = await data.json();
//   return results;
// };

// export const getServerSideProps = async ({}: GetServerSideProps) => {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
//   ).json();
//   if (!results) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { results },
//   };
// };
