/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_ENV === 'production';

const nextConfig = {
    output: isProd ? 'export' : undefined,
    rewrites: isProd ? undefined : async () => {
        return [
            {
                source: '/api/:path*',
                destination: 'http://192.168.1.2:42110/api/:path*',
            },
            {
                source: '/auth/:path*',
                destination: 'http://192.168.1.2:42110/auth/:path*',
            },
            {
                source: '/static/:path*',
                destination: 'http://192.168.1.2:42110/static/:path*',
            },
        ];
    },
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: {
        loader: isProd ? 'custom' : 'default',
        loaderFile: isProd ? './image-loader.ts' : undefined,
        remotePatterns: isProd ? [
            {
                protocol: "https",
                hostname: "**.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "generated.khoj.dev",
            },
            {
                protocol: "https",
                hostname: "assets.khoj.dev",
            },
        ] : [
            {
                protocol: "https",
                hostname: "*"
            },
            {
                protocol: "http",
                hostname: "*"
            }
        ]
    }
};

export default nextConfig;
