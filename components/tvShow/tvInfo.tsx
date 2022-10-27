import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { QueryKey, restFetcher } from "../../queryClient";
import { CreditsData, MovieDetails, TvDetails } from "../../type";
import TrailerBtn from "../detail/trailerBtn";

export const TviInfo = ({
  data,
  creditsData,
}: {
  data: TvDetails;
  creditsData: CreditsData;
}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  console.log("디테일data입니다", data);
  console.log("creditsData니다", creditsData);
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
      <div className="flex-none w-64 lg:w-96">
        <Image
          layout="responsive"
          alt={data.name}
          src={`${BASE_URL}${data?.poster_path}`}
          height={750}
          width={500}
        />
      </div>
      <div className="md:ml-24">
        <h2 className="text-4xl mt-4 md:mt-0 font-semibold">{data.name}</h2>
        <div className="flex flex-wrap items-center text-gray-400 text-sm mt-2">
          <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              ></path>
            </g>
          </svg>
          <span className="ml-1">{(data.vote_average * 10).toFixed(2)}%</span>
          <span className="mx-2">|</span>
          <span>{data.first_air_date}</span>
          <span className="mx-2">|</span>
          <span>{data.genres.map((genre) => `${genre.name} `)}</span>
        </div>
        <p className=" mt-8">{data.overview}</p>
        <div className="mt-12">
          <h4 className=" font-semibold">Featured Crew</h4>
          <div className="flex mt-4">
            {creditsData.crew.slice(0, 2).map((Crew, index) => (
              <div className="mr-8" key={index}>
                <div>{Crew.name}</div>
                <div className="text-sm text-gray-400">{Crew.job}</div>
              </div>
            ))}
          </div>
        </div>
        <TrailerBtn />
      </div>
    </div>
  );
};
export default TviInfo;
