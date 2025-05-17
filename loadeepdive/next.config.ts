// const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

// const nextConfig = {
//   output: 'export',
//   // basePath: isGithubPages ? '' : '',
//   // assetPrefix: isGithubPages ? '' : '',
// };

// export default nextConfig;

// next.config.js
const nextConfig = {
  output: 'export',
  basePath: '/loadeepdive',
};

module.exports = nextConfig;