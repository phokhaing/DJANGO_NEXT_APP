module.exports = {
  reactStrictMode: true,
  swcMinify: false, // disable load SWC binary

  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};