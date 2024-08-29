/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['plus.unsplash.com'],
    domains: ['res.cloudinary.com'], // Add your domains here
  },
}

module.exports = nextConfig
