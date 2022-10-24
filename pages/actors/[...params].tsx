import { Query, useQuery } from "@tanstack/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { ActorCredit } from "../../components/actor/actorCredits";
import AcrtorInfo from "../../components/actor/actorInfo";
import MovieCast from "../../components/movie/movieCast";
import MovieiInfo from "../../components/movie/movieInfo";
import Seo from "../../components/Seo";
import { QueryKey, restFetcher } from "../../queryClient";
import {
  MovieDetails,
  Movie,
  CreditsData,
  DetailParams,
  atctorDetails,
  actorCreditsData,
} from "../../type";

const useGetActorDeteliCreditsData = (id: number | undefined) => {
  const { data } = useQuery([QueryKey.ACTOR_CAST, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/person/${id}/movie_credits`,
    })
  );
  return data;
};

const useGetActorData = (id: number | undefined) => {
  return useQuery<atctorDetails>([QueryKey.ACTOR, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/person/${id}`,
    })
  );
};

export const ActorDetail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [id, title] = (params || []) as DetailParams;
  const { data, isLoading } = useGetActorData(id);
  const detailData: actorCreditsData = useGetActorDeteliCreditsData(id);

  if (isLoading) return <h4>Loading...</h4>;
  if (!data) return <h4>No data found</h4>;
  if (!detailData) return <h4>No data found</h4>;
  console.log("사람data", data);
  console.log("detailData", detailData);

  return (
    <>
      <Seo title={`${data.name}`} />
      <AcrtorInfo data={data} detailData={detailData} />
      <ActorCredit {...detailData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.params;
  return {
    props: { params },
  };
};

export default ActorDetail;
