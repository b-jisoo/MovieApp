/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const debug = process.env.NODE_ENV !== "production";
const repository = "MovieApp";

const nextConfig = {
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/from",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/movies/:id/videos",
        destination: `https://api.themoviedb.org/3/movie/:id/videos?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/movies/:id/credits",
        destination: `https://api.themoviedb.org/3/movie/:id/credits?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/movies/search/:text",
        destination: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&query=:text`,
      },
      {
        source: "/api/tv",
        destination: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/tv/:id",
        destination: `https://api.themoviedb.org/3/tv/:id?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/tv/:id/videos",
        destination: `https://api.themoviedb.org/3/tv/:id/videos?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/tv/:id/credits",
        destination: `https://api.themoviedb.org/3/tv/:id/credits?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/person",
        destination: `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/person/:id",
        destination: `https://api.themoviedb.org/3/person/:id?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/person/:id/movie_credits",
        destination: `https://api.themoviedb.org/3/person/:id/movie_credits?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/person/search/:text",
        destination: `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=ko-KR&query=:text`,
      },
    ];
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
