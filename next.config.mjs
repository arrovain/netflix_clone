/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        host: "image.tmdb.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
