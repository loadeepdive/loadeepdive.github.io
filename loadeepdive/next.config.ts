const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/loadeepdive' : '',
  assetPrefix: isGithubPages ? '/loadeepdive/' : '',
};

export default nextConfig;