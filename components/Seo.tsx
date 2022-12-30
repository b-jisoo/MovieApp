type Seotype = {
  title: string | undefined;
  description?: string | undefined;
  images?: [
    {
      url: string;
      width: number;
      height: number;
      alt: string;
    }
  ];
};

export const Seo = ({
  title,
  description = "next.js로 만들어본 Movie웹사이트입니다.",
  images = [{ url: "/vercel.svg", width: 285, height: 167, alt: "로고" }],
}: Seotype) => {
  return {
    title,
    description,
    canonical: "https://courageous-lolly-f1062c.netlify.app/",
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "https://courageous-lolly-f1062c.netlify.app/",
      title: "next.js로 만들어본 Movie웹사이트입니다.",
      site_name: "MovieApp",
      images,
    },
  };
};
export default Seo;
