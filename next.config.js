// import type { NextConfig } from "next";
// const nextConfig: NextConfig = {
//     images: {
//         remotePatterns: [
//             { protocol: "https", hostname: "images.unsplash.com" },
//             { protocol: "https", hostname: "api.dicebear.com" }
//         ]
//     }
// };
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // ✅ allow Unsplash images
  },
};

module.exports = nextConfig;

