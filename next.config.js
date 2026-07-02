/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? "/landingpage" : "",
};

module.exports = nextConfig;
