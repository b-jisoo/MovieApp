import { Query, useQuery } from "@tanstack/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import MovieCast from "../../components/movie/movieCast";
import MovieiInfo from "../../components/movie/movieInfo";
import Seo from "../../components/Seo";
import TviInfo from "../../components/tvShow/tvInfo";
import { QueryKey, restFetcher } from "../../queryClient";
import {
  MovieDetails,
  Movie,
  CreditsData,
  DetailParams,
  TvDetails,
} from "../../type";

const useGetTvDeteliCreditsData = (id: number | undefined) => {
  const { data, isLoading } = useQuery([QueryKey.TVCAST, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/tv/${id}/credits`,
    })
  );
  return data;
};

const useGetMoviesDeteliData = (id: number | undefined) => {
  console.log(id);
  return useQuery<TvDetails>([QueryKey.TVSHOW, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/tv/${id}`,
    })
  );
};

export const TVDetail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [id, title] = (params || []) as DetailParams;
  const { data, isLoading } = useGetMoviesDeteliData(id);
  const creditsData: CreditsData = useGetTvDeteliCreditsData(id);

  console.log("디테일data", data);
  if (isLoading) return <h4>Loading...</h4>;
  if (!data) return <h4>No data found</h4>;
  if (!creditsData) return <h4>No data found</h4>;

  return (
    <>
      <Seo title={`${data.name}(${data.first_air_date.slice(0, 4)})`} />
      <TviInfo data={data} creditsData={creditsData} />
      <MovieCast {...creditsData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.params;
  return {
    props: { params },
  };
};

export default TVDetail;
