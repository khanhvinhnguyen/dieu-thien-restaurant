import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com', 'firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
    dangerouslyAllowSVG: true,
  },
};

export default withNextIntl(nextConfig);