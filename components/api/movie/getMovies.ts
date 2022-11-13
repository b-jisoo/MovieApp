import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { QueryKey, restFetcher } from "../../../queryClient";
import {
  get_Credits,
  get_video,
  MovieDetails as get_movieDetails,
  video,
} from "../../../type";

const MOVIE_URL = "/api/movies/";

export const useGetMoviesCredits = (id: number | undefined) => {
  const { data } = useQuery([QueryKey.MOVIES_CREDIT, id], () =>
    axios.get<get_Credits>(MOVIE_URL + `${id}/credits`)
  );
  return data;
};

export const useGetMoviesDeteli = (id: number | undefined) => {
  return useQuery([QueryKey.MOVIES_DETAIL, id], () =>
    axios.get<get_movieDetails>(MOVIE_URL + `${id}`)
  );
};
export const useGetMoviesVideo = (id: number | undefined) => {
  const { data } = useQuery([QueryKey.MOVIES_VIDEO, id], () =>
    axios.get<get_video>(MOVIE_URL + `${id}/videos`)
  );
  return data;
};
