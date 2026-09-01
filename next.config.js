/** @type {import('next').NextConfig} */
const nextConfig = {
    // Keep reactStrictMode false to avoid potential hydration issues
    reactStrictMode: false,
    
    // Enable static export for seamless Cloudflare deployment
    output: 'export',

    // Cloudflare Pages requires unoptimized images when using static export
    images: {
        unoptimized: true,
    },

    // Ensure the API URL environment variable is available
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
    },
}

module.exports = nextConfig
