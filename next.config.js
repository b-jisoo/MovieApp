/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
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
        source: "/api/movies/:id/credits",
        destination: `https://api.themoviedb.org/3/movie/:id/credits?api_key=${API_KEY}&language=ko-KR`,
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
    ];
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
