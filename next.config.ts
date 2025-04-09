import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
    },
};

export default nextConfig;
