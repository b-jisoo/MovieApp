import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { restFetcher } from "../../queryClient";
import { MovieDetails } from "../../type";
import { AutoComplete } from "./autoComplete";

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [movies, setMovies] = useState<MovieDetails[]>();
  const [focuse, setFocuse] = useState(false);
  useEffect(() => {
    if (text.length > 1) {
      (async () => {
        const res = await restFetcher({
          method: "GET",
          path: `/api/movies/search/${text}`,
        });

        setMovies(res.results);
      })();
    } else setMovies([]);
  }, [text, focuse]);

  const handleChangeText = (e: SyntheticEvent) => {
    setText((e.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <div id="QYmiwnIa9nwjcEZS8OlF" className="relative mt-3 md:mt-0">
          <input
            type="text"
            className="bg-gray-100 text-sm rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
            placeholder="Search (Press '/' to focus)"
            value={text}
            onChange={handleChangeText}
            ref={inputRef}
            onFocus={() => setFocuse(true)}
            // onBlur={() => setFocuse(false)}
          ></input>
          <div className="absolute top-0">
            <svg
              className="fill-current w-4 text-gray-500 mt-2 ml-2"
              viewBox="0 0 24 24"
            >
              <path
                className="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
              ></path>
            </svg>
          </div>

          <div className="z-50 absolute bg-gray-100 text-sm rounded w-64 mt-4">
            {movies && (
              <AutoComplete movie={movies.slice(0, 5)} setText={setText} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
