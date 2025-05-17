// const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/loadeepdive' : '',
  // assetPrefix: isGithubPages ? '' : '',
};

export default nextConfig;