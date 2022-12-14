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
export interface TvShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: [number];
  id: number;
  name: string;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface GetMovies {
  page: number | null;
  results: Movie[];
  total_pages: number | null;
  total_results: number | null;
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
export interface get_TvDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: created_by[];
  episode_run_time: [number];
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  id: number;
  in_production: true;
  languages: [string];
  last_air_date: string;
  last_episode_to_air: last_episode_to_air;
  name: string;
  networks: networks;
  next_episode_to_air: null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies;
  production_countries: production_countries;
  seasons: seasons;
  spoken_languages: production_countries[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
export interface atctor {
  adult: boolean;
  gender: number;
  id: number;
  known_for: known_for[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}
export interface atctorDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export type DetailParams = [number, string] | [];

interface known_for {
  adult: boolean;
  genre_ids: number[];
  length: number;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
interface networks {
  id: number;
  logo_path: string;
  name: string;
  origin_country: "";
}
interface last_episode_to_air {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
}
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
interface created_by {
  credit_id: number;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
}

export interface get_Credits {
  cast: Cast[];
  crew: Crew[];
}
export interface get_video {
  id: number;
  results: video[];
}
export interface video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
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
export interface actorCreditsData {
  cast: actorCast[];
  crew: actorCrew[];
}

interface actorCast {
  adult: boolean;
  backdrop_path: string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

interface actorCrew {
  adult: boolean;
  backdrop_path: string;
  credit_id: string;
  department: string;
  genre_ids: [number];
  id: number;
  job: string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
