import Seo from "../components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { QueryKey, restFetcher } from "../queryClient";
import { GetMovies, Movie } from "../type";
import MovieItem from "../components/MovieItem";

const useGetMoviesData = () => {
  return useQuery<GetMovies, Error>(
    [QueryKey.MOVIES],
    () =>
      restFetcher({
        method: "GET",
        path: "/api/movies",
      }),
    {
      onSuccess: (data) => {
        // 성공시 호출
        console.log("data입니다", data);
      },
      onError: (e) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
        console.log(e.message);
      },
    }
  );
};

export const Home = () => {
  const { data, isError, error, isLoading } = useGetMoviesData();

  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error: {error.message}</h4>;
  if (!data) return <h4>No data found</h4>;

  return (
    <div className="container">
      <Seo title="Home" />
      {data.results?.map((movie: Movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
      `}</style>
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
