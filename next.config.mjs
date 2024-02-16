/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ["i.pinimg.com"],
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
