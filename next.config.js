/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    domains: ['localhost'], // keep your localhosts domain for dev
  },

  basePath: isProd ? '/Portfolio' : '', // repo name (case-sensitive!)
  assetPrefix: isProd ? '/Portfolio/' : '',

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/files/',
          outputPath: 'static/files/',
        },
      },
    });
    return config;
  },
}

module.exports = nextConfig