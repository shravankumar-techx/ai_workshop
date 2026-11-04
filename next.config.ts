import type { NextConfig } from "next";

// Disable Next.js dev overlay indicator and UX at process level
process.env.NEXT_PRIVATE_DISABLE_DEV_OVERLAY_UX = '1';
process.env.__NEXT_DISABLE_DEV_OVERLAY_UX = 'true';

const nextConfig: NextConfig = {
  devIndicators: false,
  webpack: (config, { webpack, dev }) => {
    if (dev) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.__NEXT_DISABLE_DEV_OVERLAY_UX': JSON.stringify(true),
          'process.env.NEXT_PRIVATE_DISABLE_DEV_OVERLAY_UX': JSON.stringify('1'),
          'process.env.__NEXT_DEV_INDICATOR': JSON.stringify(false),
        })
      );
    }
    return config;
  },
};

export default nextConfig;
