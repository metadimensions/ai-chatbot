/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  experimental: {
    windowHistorySupport: true
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'avatars.githubusercontent.com',
  //       port: '',
  //       pathname: '**'
  //     }
  //   ]
  // }
}
