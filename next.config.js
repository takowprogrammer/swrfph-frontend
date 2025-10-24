/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove standalone output for Vercel compatibility
    // output: 'standalone', // Commented out for Vercel
    // Helps Next.js find the correct project root in monorepos with multiple lockfiles
    outputFileTracingRoot: __dirname,
    // Disable experimental features that cause React Server Components issues
    experimental: {
        optimizePackageImports: [],
    },
    // Move serverComponentsExternalPackages to the correct location
    serverExternalPackages: [],
    // Disable React strict mode to avoid hydration issues
    reactStrictMode: false,
    // Minimal webpack configuration
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
            };
        }
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
    },
}

module.exports = nextConfig
