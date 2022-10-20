import Link from "next/link";
import { useRouter } from "next/router";
import { Movie } from "../type";

type Query = {
  id: number;
  title: string;
};

export const MovieItem = (movie: Movie) => {
  const router = useRouter();
  const onClick = ({ id, title }: Query) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <>
      <div
        onClick={() => onClick({ id: movie.id, title: movie.original_title })}
        className="movie"
        key={movie.id}
      >
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h4>
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>{movie.original_title}</a>
          </Link>
        </h4>
      </div>
      <style jsx>{`
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default MovieItem;
