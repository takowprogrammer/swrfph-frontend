/** @type {import('next').NextConfig} */
const nextConfig = {
    // Keep reactStrictMode false to avoid potential hydration issues
    reactStrictMode: false,

    // Essential configuration for external images
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

    // Ensure the API URL environment variable is available
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
    },
}

module.exports = nextConfig
