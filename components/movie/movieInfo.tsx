import Image from "next/image";
import { useState } from "react";
import { get_Credits, MovieDetails, video } from "../../type";
import { Palyer } from "../detail/player";
import TrailerBtn from "../layout/trailerBtn";

interface movieInfo {
  details: MovieDetails;
  credits: get_Credits;
  video: video[];
}

export const MovieiInfo = (props: movieInfo) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w400";
  const [modalSelected, setModalSelected] = useState(false);

  const ModalHandler = () => {
    setModalSelected(true);
  };
  const closeModalHandler = () => {
    setModalSelected(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
      <div className="flex-none w-64 lg:w-96">
        <Image
          layout="responsive"
          alt={props.details.title}
          src={`${BASE_URL}${props.details?.poster_path}`}
          height={576}
          width={384}
        />
      </div>
      <div className="md:ml-24">
        <h2 className="text-4xl mt-4 md:mt-0 font-semibold">
          {props.details.title}
        </h2>
        <div className="flex flex-wrap items-center text-gray-400 text-sm mt-2">
          <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              ></path>
            </g>
          </svg>
          <span className="ml-1">
            {(props.details.vote_average * 10).toFixed(2)}%
          </span>
          <span className="mx-2">|</span>
          <span>{props.details.release_date}</span>
          <span className="mx-2">|</span>
          <span>{props.details.genres.map((genre) => `${genre.name} `)}</span>
        </div>
        <p className=" mt-8">{props.details.overview}</p>
        <div className="mt-12">
          <h4 className=" font-semibold">Featured Crew</h4>
          <div className="flex mt-4">
            {props.credits.crew.slice(0, 2).map((Crew, index) => (
              <div className="mr-8" key={index}>
                <div>{Crew.name}</div>
                <div className="text-sm text-gray-400">{Crew.job}</div>
              </div>
            ))}
          </div>
        </div>
        {modalSelected && (
          <Palyer onClose={closeModalHandler} video={props.video} />
        )}
        <div>
          <div className="mt-12">
            {props.video.length === 0 ? (
              <TrailerBtn label="Trailer unavailable" disabled={true} />
            ) : (
              <TrailerBtn
                label="Play Trailer"
                disabled={false}
                onClick={ModalHandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieiInfo;
