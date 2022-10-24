const { withPlausibleProxy } = require('next-plausible');

module.exports = withPlausibleProxy()({
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: [
      'images.unsplash.com',
      'media-exp1.licdn.com',
      'res.cloudinary.com',
    ],
  },
});
