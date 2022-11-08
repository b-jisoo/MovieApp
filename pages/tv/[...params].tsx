import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  useGetTvCredits,
  useGetTvDeteli,
  useGetTvVideo,
} from "../../components/api/tv/getTv";

import InfoCast from "../../components/detail/infoCast";
import { LoadingAnimation } from "../../components/layout/loadingAnimation";
import Seo from "../../components/Seo";
import TviInfo from "../../components/tvShow/tvInfo";
import { get_Credits, DetailParams } from "../../type";
import { DefaultSeo } from "next-seo";

export const TVDetail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [id, title] = (params || []) as DetailParams;
  const { data, isLoading } = useGetTvDeteli(id);
  const creditsData: get_Credits = useGetTvCredits(id);
  const videoData = useGetTvVideo(id);

  if (!data || !creditsData || !videoData || isLoading)
    return <LoadingAnimation />;
  console.log(data);

  return (
    <>
      <DefaultSeo
        {...Seo({
          title: `${data.name}(${data.first_air_date.slice(0, 4)})`,
          description: data.overview,
        })}
      />
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
