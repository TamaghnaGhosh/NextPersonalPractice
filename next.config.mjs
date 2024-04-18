/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  redirects: async () => {
    return [
      {
        source: "/redirectpage",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
