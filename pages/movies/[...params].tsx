import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

type MovieDetailParams = [string, string] | [];

export const Detail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const router = useRouter();
  const [title, id] = (params || []) as MovieDetailParams;
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.params;
  return {
    props: { params },
  };
};

export default Detail;
