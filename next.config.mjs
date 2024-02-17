/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pinimg.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/infinity",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
