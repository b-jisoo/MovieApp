import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  useGetMoviesCredits,
  useGetMoviesDeteli,
  useGetMoviesVideo,
} from "../../components/api/movie/getMovies";

import InfoCast from "../../components/detail/infoCast";
import { LoadingAnimation } from "../../components/layout/loadingAnimation";
import MovieiInfo from "../../components/movie/movieInfo";
import Seo from "../../components/Seo";
import { get_Credits, DetailParams, get_video } from "../../type";

export const MovieDetail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [id, title] = (params || []) as DetailParams;
  const { data, isLoading } = useGetMoviesDeteli(id);
  const creditsData: get_Credits = useGetMoviesCredits(id);
  const videoData: get_video = useGetMoviesVideo(id);

  if (!data || !creditsData || !videoData || isLoading)
    return <LoadingAnimation />;

  return (
    <>
      <Seo title={`${data.title}(${data.release_date.slice(0, 4)})`} />
      <MovieiInfo
        details={data}
        credits={creditsData}
        video={videoData.results}
      />
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

export default MovieDetail;

/*
adult: false
backdrop_path: "/aTovumsNlDjof7YVoU5nW2RHaYn.jpg"
belongs_to_collection: {id: 91361, name: 'Halloween Collection', poster_path: '/cq1lf9sUi10faSvqegx8dLDEeZV.jpg', backdrop_path: '/d6uWYZe7h7M3F7h4IBjO1jgIkMh.jpg'}
budget: 20000000
genres: (3) [{…}, {…}, {…}]
homepage: "https://www.halloweenmovie.com"
id: 616820
imdb_id: "tt10665342"
original_language: "en"
original_title: "Halloween Ends"
overview: "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all."
popularity: 3887.012
poster_path: "/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg"
production_companies: (5) [{…}, {…}, {…}, {…}, {…}]
production_countries: [{…}]
release_date: "2022-10-12"
revenue: 63000000
runtime: 111
spoken_languages: [{…}]
status: "Released"
tagline: ""
title: "Halloween Ends"
video: false
vote_average: 6.9
vote_count: 414
*/
