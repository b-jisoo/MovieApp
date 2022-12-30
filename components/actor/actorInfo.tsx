import Image from "next/image";
import Link from "next/link";
import { actorCreditsData, atctorDetails } from "../../type";

export const AcrtorInfo = ({
  data,
  detailData,
}: {
  data: atctorDetails;
  detailData: actorCreditsData;
}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  const POSTER_URL = "https://image.tmdb.org/t/p/w185";

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
      <div className="flex-none w-64 lg:w-96">
        <Image
          layout="responsive"
          alt={data.name}
          src={`${BASE_URL}${data?.profile_path}`}
          width={384}
          height={576}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="md:ml-24">
        <h2 className="text-4xl mt-4 md:mt-0 font-semibold">{data.name}</h2>
        <div className="flex flex-wrap items-center text-gray-400 text-sm mt-2">
          <svg
            className="fill-current text-gray-400 hover:text-white w-4"
            viewBox="0 0 448 512"
          >
            <path d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path>
          </svg>
          <span className="ml-1">{data.birthday}</span>
          <span className="mx-2">|</span>
          <span> in {data.place_of_birth}</span>
        </div>
        <div className="mt-12">
          <h4 className=" font-semibold">Known For</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {detailData.cast
              .sort((a, b) => b.popularity - a.popularity)
              .slice(0, 5)
              .map((cast) => (
                <div className="mr-4" key={cast.id}>
                  <Link href={`../movies/${cast.id}`}>
                    <Image
                      layout="responsive"
                      alt={cast.title}
                      src={`${POSTER_URL}${
                        cast.poster_path || cast.backdrop_path
                      }`}
                      width={145}
                      height={218}
                      className="cursor-pointer hover:opacity-75 transition ease-in-out duration-150"
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                    />
                  </Link>
                  <div className="cursor-pointer text-sm leading-normal block text-500 hover:text-gray-400 mt-1">
                    <Link href={`../movies/${cast.id}`}>
                      {cast.title || cast.original_title}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AcrtorInfo;
