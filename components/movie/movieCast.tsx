import { SyntheticEvent } from "react";
import { CreditsData } from "../../type";

export const MovieCast = (creditsData: CreditsData) => {
  console.log("creditsDatacreditsDatacreditsData", creditsData);

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/300x450.png";
  };
  return (
    <div className="tv-cast  border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Cast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {creditsData.cast.slice(0, 5).map((cast, index) => (
            <div className="mt-8" key={index}>
              <a href={`https://movies.andredemos.ca/actors/${cast.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                  alt={`${cast.cast_id}`}
                  className="hover:opacity-75 transition ease-in-out duration-150"
                  onError={onErrorImg}
                />
              </a>
              <div className="mt-2">
                <a
                  href={`https://movies.andredemos.ca/actors/${cast.id}`}
                  className="text-lg mt-2 hover:text-gray:300"
                >
                  {cast.name}
                </a>
                <div className="text-sm text-gray-400">Ser Otto Hightower</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
