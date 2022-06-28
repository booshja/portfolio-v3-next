/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: { domains: ['images.unsplash.com', 'media-exp1.licdn.com'] },
};

module.exports = nextConfig;
