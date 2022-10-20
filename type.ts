export interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export interface GetMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
