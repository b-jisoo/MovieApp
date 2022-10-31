import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ActorCredit } from "../../components/actor/actorCredits";
import AcrtorInfo from "../../components/actor/actorInfo";
import {
  useGetActorCredits,
  useGetActorDeteli,
} from "../../components/api/actor/getActors";
import { SplashScreen } from "../../components/layout/splashScreen";

import Seo from "../../components/Seo";
import { DetailParams, actorCreditsData } from "../../type";

export const ActorDetail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [id, title] = (params || []) as DetailParams;
  const { data, isLoading } = useGetActorDeteli(id);
  const detailData: actorCreditsData = useGetActorCredits(id);

  if (isLoading) return <SplashScreen />;
  if (!data || !detailData) return <h4>No data found</h4>;

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
