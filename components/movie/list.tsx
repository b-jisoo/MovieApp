import { GetMovies, Movie } from "../../type";
import MovieItem from "./movieItem";

export const MovieList = ({ list }: { list: { results: Movie[] }[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {list.map((page) =>
        page.results.map((result) => <MovieItem {...result} key={result.id} />)
      )}
    </div>
  );
};

export default MovieList;
