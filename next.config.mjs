// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  // Your Next.js config
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/users/register',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`,
      },
    ];
  },
});
