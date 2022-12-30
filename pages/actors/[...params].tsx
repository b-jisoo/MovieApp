import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ActorCredit } from "../../components/actor/actorCredits";
import AcrtorInfo from "../../components/actor/actorInfo";
import {
  useGetActorCredits,
  useGetActorDeteli,
} from "../../components/api/actor/getActors";
import { LoadingAnimation } from "../../components/layout/loadingAnimation";

import Seo from "../../components/Seo";
import { DetailParams, actorCreditsData } from "../../type";
import { NextSeo } from "next-seo";

export const ActorDetail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [id, title] = (params || []) as DetailParams;
  const { data, isLoading } = useGetActorDeteli(id);
  const detailData: actorCreditsData = useGetActorCredits(id);

  // if (isLoading) return <LoadingAnimation />;
  if (!data || !detailData || isLoading) return <LoadingAnimation />;

  return (
    <>
      <NextSeo {...Seo({ title: data.name, description: data.name })} />
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
