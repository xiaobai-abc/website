/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xiaobai-abc.cn",
        port: "",
        pathname: "/static/**"
      }
    ]
  }
};

export default nextConfig;
