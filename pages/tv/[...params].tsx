import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  useGetTvCredits,
  useGetTvDeteli,
  useGetTvVideo,
} from "../../components/api/tv/getTv";

import InfoCast from "../../components/detail/infoCast";
import Seo from "../../components/Seo";
import TviInfo from "../../components/tvShow/tvInfo";
import { get_Credits, DetailParams } from "../../type";

export const TVDetail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [id, title] = (params || []) as DetailParams;
  const { data, isLoading } = useGetTvDeteli(id);
  const creditsData: get_Credits = useGetTvCredits(id);
  const videoData = useGetTvVideo(id);

  console.log("videoData", videoData);
  if (isLoading) return <h4>Loading...</h4>;
  if (!data || !creditsData || !videoData) return <h4>No data found</h4>;

  return (
    <>
      <Seo title={`${data.name}(${data.first_air_date.slice(0, 4)})`} />
      <TviInfo detail={data} credits={creditsData} video={videoData.results} />
      <InfoCast {...creditsData} />
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
