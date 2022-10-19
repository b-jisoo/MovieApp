import Head from "next/head";

interface Props {
  title: string | undefined;
}

export const Seo = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} | Next Movie</title>
    </Head>
  );
};
export default Seo;
