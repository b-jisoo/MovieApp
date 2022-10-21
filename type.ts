export interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
  release_date: string;
}

export interface GetMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: belongs_to_collection[];
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  production_countries: production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: production_countries[];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export type MovieDetailParams = [number, string] | [];

interface Genres {
  id: number;
  name: string;
}
interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface production_countries {
  iso_3166_1: string;
  name: string;
}
interface production_countries {
  iso_639_1: string;
  english_name: string;
  name: string;
}
interface belongs_to_collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface CreditsData {
  cast: Cast[];
  crew: Crew[];
}

interface Crew {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null;
}

interface Cast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}
