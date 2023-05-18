/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    App_Name: "India Mart Clone",
    API_DEVELOPMENT: "http://192.168.1.19:5000",
    PRODUCTION: false,
  },
};

module.exports = nextConfig;
