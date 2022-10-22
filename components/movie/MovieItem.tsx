import Link from "next/link";
import { useRouter } from "next/router";
import { Movie } from "../../type";

type Query = {
  id: number;
  title: string;
};

export const MovieItem = (movie: Movie) => {
  const router = useRouter();
  const onClick = ({ id, title }: Query) => {
    router.push(`/movies/${id}/${title}`);
  };
  return (
    <>
      <div className="movie mt-8">
        <a
          onClick={() => onClick({ id: movie.id, title: movie.title })}
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </a>
        <div className="mt-2">
          <Link href={`/movies/${movie.id}/${movie.title}`}>
            <a className="text-lg mt-2 hover:text-gray-300">{movie.title}</a>
          </Link>
          <div className="flex items-center text-gray-400 text-sm mt-1">
            <svg
              className="fill-current text-orange-400 w-4"
              viewBox="0 0 24 24"
            >
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star"
                ></path>
              </g>
            </svg>
            <span className="ml-1">{movie.vote_average * 10}%</span>
            <span className="mx-2">|</span>
            <span>{movie.release_date}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .movie {
        }
        .movie img {
          cursor: pointer;
          max-width: 100%;
          border-radius: 12px;
          height: auto;
          box-sizing: border-box;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
      `}</style>
    </>
  );
};

export default MovieItem;