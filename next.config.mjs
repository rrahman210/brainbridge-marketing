import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brainbridge.cloud',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/#/privacy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/#/terms',
        destination: '/terms',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
