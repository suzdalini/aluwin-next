import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    //output: 'export',
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.alu-win.ru',
            },
            {
                protocol: 'https',
                hostname: 'mc.yandex.ru',
            },
        ],
        deviceSizes: [640, 750, 828, 1080, 1600, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
};

export default nextConfig;
