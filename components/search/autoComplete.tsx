import Link from "next/link";
import { SyntheticEvent } from "react";
import { GetMovies, Movie, MovieDetails } from "../../type";

interface AutoComplete {
  movie: MovieDetails[];
  setText: any;
}

export const AutoComplete = (props: AutoComplete) => {
  if (!props.movie) return null;
  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/300x450.png";
  };
  const handleChangeText = () => {
    props.setText("");
  };

  return (
    <ul>
      {props.movie.map((data: MovieDetails) => {
        return (
          <li className="border-b border-gray-200" key={data.id}>
            <Link href={`/movies/${data.id}/${data.title}`}>
              <a
                className=" hover:bg-gray-200 px-3 py-3 flex items-center transition ease-in-out duration-150"
                onClick={handleChangeText}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w92/${data.poster_path}`}
                  alt="poster"
                  className="w-8"
                  onError={onErrorImg}
                />
                <span className="ml-4">{data.title}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
